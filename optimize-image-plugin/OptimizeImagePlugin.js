const { RawSource } = require("webpack-sources");

function getMediaInfo(url) {
  const strArray = url.split(".");
  return [strArray[0], strArray[strArray.length - 1]];
}

class OptimizeImagePlugin {
  name = "OptimizeImagePlugin";
  supportTypeReg = /\.(png|jpe?g|webp)/i;

  constructor(options = {}) {
    this.transformPlugin = options.transformPlugin || null;
    this.optimizePlugin = options.optimizePlugin;
  }

  apply(compiler) {
    const _this = this;
    compiler.hooks.emit.tapPromise(_this.name, async (compilation) => {
      const assets = await this.getAssets(compilation);

      if (!assets.length) return Promise.resolve();

      const promises = assets.map((asset) => {
        console.log(asset.name);
        return _this
          .optimize(asset)
          .then((buffer) => compilation.updateAsset(asset.name, new RawSource(buffer)))
          .catch((error) => console.log(error));
      });
      return Promise.all(promises);
    });
  }

  async getAssets(compilation) {
    const _assets = this.getValidAssets(compilation);

    if (this.transformPlugin) {
      const webpAssets = _assets.map(async (asset) => {
        const [assetName, assetsType] = getMediaInfo(asset.name);
        if (this.transformPlugin.mediaType !== assetsType) {
          const buf = await this.transformPlugin.transform(asset);
          compilation.emitAsset(`${assetName}.${this.transformPlugin.mediaType}`, new RawSource(buf));
        }
      });
      await Promise.all[webpAssets];
    }
    return this.getValidAssets(compilation);
  }

  optimize(rawSource) {
    return this.optimizePlugin.optimize(rawSource.source._value);
  }

  getValidAssets(compilation) {
    const _assets = compilation.getAssets();
    return _assets.filter((asset) => this.supportTypeReg.test(asset.name) && asset.source._value !== undefined);
  }
}

module.exports = {
  getMediaInfo,
  OptimizeImagePlugin,
};

const { RawSource } = require('webpack-sources');
const { Compilation } = require('webpack');
const { getMediaInfo, nonSupportType } = require('./util');
const FA = require('fasy');

class OptimizeImagePlugin {
  name = 'OptimizeImagePlugin';
  constructor(options = {}) {
    this.transformPlugin = options.transformPlugin || null;
    this.optimizePlugin = options.optimizePlugin;
  }

  apply(compiler) {
    const _this = this;

    compiler.hooks.thisCompilation.tap(_this.name, (compilation) => {
      compilation.hooks.processAssets.tapPromise(
        {
          name: this.name,
          stage: Compilation.PROCESS_ASSETS_STAGE_ANALYSE,
        },
        (rawSource) => {
          return FA.concurrent.map(([pathname, source]) => {
            if (!source instanceof RawSource) return;
            if (!source._valueIsBuffer) return;
            return _this.transform(source, pathname, compilation);
          }, Object.entries(rawSource));
        }
      );
    });

    compiler.hooks.afterCompile.tapPromise(_this.name, async (compilation) => {
      const assetsRawSource = this.getValidAssets(compilation);
      return FA.concurrent.forEach((asset) => _this.optimize(asset, compilation), assetsRawSource);
    });
  }

  async optimize(rawSource, compilation) {
    return this.optimizePlugin
      .optimize(rawSource)
      .then((buffer) => compilation.updateAsset(rawSource.name, new RawSource(buffer)))
      .catch((error) => console.log(error));
  }

  async transform(assetsRawSource, pathname, compilation) {
    const [assetName, assetsType] = getMediaInfo(pathname);

    if (this.transformPlugin.mediaType === assetsType) return;
    if (nonSupportType.includes(assetsType)) return;

    const buffer = await this.transformPlugin.transform(assetsRawSource, pathname);
    compilation.emitAsset(`${assetName}.${this.transformPlugin.mediaType}`, new RawSource(buffer));
  }

  getValidAssets(compilation) {
    const _assets = compilation.getAssets();
    return _assets.filter(
      (asset) => this.optimizePlugin.supportTypeReg.test(asset.name) && asset.source._value !== undefined
    );
  }
}

module.exports = OptimizeImagePlugin;

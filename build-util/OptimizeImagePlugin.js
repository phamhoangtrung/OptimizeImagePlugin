const tinify = require('tinify');
const { RawSource } = require('webpack-sources');
const webp = require('webp-converter');

function getMediaType(url) {
  const strArray = url.split('.');
  return strArray[strArray.length - 1];
}

class OptimizeImagePlugin {
  name = 'OptimizeImagePlugin';
  supportTypeReg = /\.(png|jpe?g)/i;
  key = 'QWP40jkWrBvZ0P2kQ9h1gRSl3HLTCW96';

  constructor(options = {}) {
    webp.grant_permission();
    tinify.key = options.key || this.key;
    this.toWebp = options.toWebp || false;
  }

  apply(compiler) {
    const _this = this;

    compiler.hooks.emit.tapPromise(_this.name, async (compilation) => {
      const assets = this.getAssets(compilation);

      if (!assets.length) return Promise.resolve();

      const promises = assets.map((asset) => {
        return _this
          .tinypng(asset)
          .then((buffer) => _this.updateWebpackAsset(compilation, asset, buffer))
          .catch((error) => console.log(error));
      });
      await Promise.all(promises);
    });
  }

  async updateWebpackAsset(compilation, asset, originalBuffer) {
    let buffer = originalBuffer;
    if (this.toWebp) {
      const mediaType = getMediaType(asset.name);
      debugger;
      buffer = await webp.buffer2webpbuffer(originalBuffer, mediaType, '-q 80');
    }
    return compilation.updateAsset(asset.name, new RawSource(buffer));
  }

  tinypng(rawSource) {
    let source = tinify.fromBuffer(rawSource.source._value);
    return source.toBuffer();
  }

  getAssets(compilation) {
    const _assets = compilation.getAssets();
    return _assets.filter((asset) => this.supportTypeReg.test(asset.name) && asset.source._value !== undefined);
  }
}

module.exports = OptimizeImagePlugin;

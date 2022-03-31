const webp = require('webp-converter');
const path = require('path');
const BaseTransformPlugin = require('./base-transform-plugin');
const { getMediaInfo } = require('../OptimizeImagePlugin');

class WebpConverterPlugin extends BaseTransformPlugin {
  constructor(mediaType) {
    super(mediaType);
    webp.grant_permission();
  }

  transform(assets) {
    const [_, assetType] = getMediaInfo(assets.name);
    const buffer = assets.source._value;
    return webp.buffer2webpbuffer(buffer, assetType, '-q 80', path.resolve(__dirname, 'temp'));
  }
}

module.exports = WebpConverterPlugin;

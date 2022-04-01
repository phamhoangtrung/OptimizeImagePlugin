const webp = require('webp-converter');
const path = require('path');
const { getMediaInfo } = require('../util');
const BaseTransformationPlugin = require('./BaseTransformationPlugin');

class WebpConverterPlugin extends BaseTransformationPlugin {
  constructor() {
    super({
      mediaType: 'webp',
    });
    webp.grant_permission();
  }

  transform(rawSource, filename) {
    const [_, assetType] = getMediaInfo(filename);
    const buffer = rawSource._value;
    const tempPath = path.resolve(__dirname, './temp');
    return webp.buffer2webpbuffer(buffer, assetType, '-q 80', tempPath);
  }
}

module.exports = WebpConverterPlugin;

const webp = require('webp-converter');
const path = require('path');
const { getMediaInfo } = require('../util');

class WebpConverterPlugin {
  constructor() {
    this.mediaType = 'webp';
    webp.grant_permission();
  }

  /**
   * @param {RawSource} rawSource from require('webpack-sources')
   * @returns {Promise<Buffer>}
   */
  transform(rawSource, filename) {
    const [_, assetType] = getMediaInfo(filename);
    const buffer = rawSource._value;
    const tempPath = path.resolve(__dirname, './temp');
    return webp.buffer2webpbuffer(buffer, assetType, '-q 80', tempPath);
  }
}

module.exports = WebpConverterPlugin;

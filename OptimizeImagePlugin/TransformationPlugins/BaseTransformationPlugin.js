const { defaultSupportTypeReg } = require('../util');

class BaseTransformationPlugin {
  constructor(options = {}) {
    this.mediaType = options.mediaType;
  }

  /**
   * @param {RawSource} rawSource from require('webpack-sources')
   * @param {string} filename
   * @returns {Promise<Buffer>}
   */
  transform(rawSource, filename) {
    const buffer = rawSource._value;
    return Promise.resolve(buffer);
  }
}

module.exports = BaseTransformationPlugin;

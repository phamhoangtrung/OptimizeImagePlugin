const { defaultSupportTypeReg } = require('../util');

class BaseOptimizationPlugin {
  constructor(options = {}) {
    this.supportTypeReg = options.supportTypeReg || defaultSupportTypeReg;
  }

  /**
   * @param {RawSource} rawSource from require('webpack-sources')
   * @returns {Promise<Buffer>}
   */
  optimize(rawSource) {
    const buffer = rawSource.source._value;
    return Promise.resolve(buffer);
  }
}

module.exports = BaseOptimizationPlugin;

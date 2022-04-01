const tinify = require('tinify');
const BaseOptimizationPlugin = require('./BaseOptimizationPlugin');

class TinyPNGPlugin extends BaseOptimizationPlugin {
  constructor(options = {}) {
    super(options);
    tinify.key = options.key;
  }

  optimize(rawSource) {
    const buffer = rawSource.source._value;
    let source = tinify.fromBuffer(buffer);
    return source.toBuffer();
  }
}

module.exports = TinyPNGPlugin;

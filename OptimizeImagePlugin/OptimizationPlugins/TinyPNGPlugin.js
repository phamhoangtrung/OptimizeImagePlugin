const tinify = require('tinify');
const { defaultSupportTypeReg } = require('../util');

class TinyPNGPlugin {
  constructor(options = {}) {
    tinify.key = options.key;
    this.supportTypeReg = options.supportTypeReg || defaultSupportTypeReg;
  }

  optimize(rawSource) {
    const buffer = rawSource.source._value;
    let source = tinify.fromBuffer(buffer);
    return source.toBuffer();
  }
}

module.exports = TinyPNGPlugin;

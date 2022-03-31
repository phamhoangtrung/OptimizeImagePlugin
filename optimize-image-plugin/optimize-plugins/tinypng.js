const tinify = require("tinify");

class TinyPNGPlugin {
  constructor(key) {
    tinify.key = key;
  }

  optimize(buffer) {
    let source = tinify.fromBuffer(buffer);
    return source.toBuffer();
  }
}

module.exports = TinyPNGPlugin;

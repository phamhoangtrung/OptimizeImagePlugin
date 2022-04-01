const BaseOptimizationPlugin = require('./BaseOptimizationPlugin');

const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');

class ImageminPlugin extends BaseOptimizationPlugin {
  constructor(options = {}) {
    super(options);
  }

  optimize(rawSource) {
    const buffer = rawSource.source._value;
    debugger;
    return imagemin.buffer(buffer, {
      plugins: [
        imageminWebp(),
        imageminJpegtran(),
        imageminPngquant({
          quality: [0.6, 0.8],
        }),
      ],
    });
  }
}

module.exports = ImageminPlugin;

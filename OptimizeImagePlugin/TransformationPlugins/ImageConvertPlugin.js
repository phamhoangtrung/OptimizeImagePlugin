const path = require('path');
const { getMediaInfo } = require('../util');
const BaseTransformationPlugin = require('./BaseTransformationPlugin');
let imgConvert = require('image-convert');

class ImageConvertPlugin extends BaseTransformationPlugin {
  supportedType = ['png', 'jpg'];
  constructor(mediaType) {
    if (!this.supportedType.includes(mediaType)) {
      throw TypeError("Only support 'png' or 'jpg'");
    }
    super({ mediaType });
  }

  transform(rawSource, filename) {
    return new Promise((resolve, rejects) => {
      const buffer = rawSource._value.toString('base64');
      imgConvert.fromBuffer(
        {
          buffer,
          quality: 50,
          output_format: this.mediaType,
          size: 'original',
        },
        (err, _, file) => {
          if (err) return rejects(err);
          return resolve(file.buffer);
        }
      );
    });
  }
}

module.exports = ImageConvertPlugin;

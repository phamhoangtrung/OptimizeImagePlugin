class BaseTransformPlugin {
  supportTypeReg = /(png|jpe?g|webp)/i;

  constructor(mediaType) {
    this.mediaType = mediaType;
    if (this.supportTypeReg.test(mediaType)) {
      this.mediaType = mediaType;
    } else {
      throw new TypeError("Invalid media type");
    }
  }
}

module.exports = BaseTransformPlugin;

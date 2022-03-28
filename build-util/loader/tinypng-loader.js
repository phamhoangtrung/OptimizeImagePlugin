const tinify = require("tinify");
const { getOptions } = require("loader-utils");

// Get API key: https://tinypng.com/developers
// tinify.key = process.env.TINIFY_KEY;
tinify.key = "QWP40jkWrBvZ0P2kQ9h1gRSl3HLTCW96";

module.exports = function (sourceStr) {
  // https://webpack.js.org/api/loaders#asynchronous-loaders
  // https://webpack.js.org/api/loaders/#thiscallback
  const callback = this.async();

  const options = getOptions(this);

  const maxSize = options.limit;
  const fileSize = sourceStr.length;

  if (fileSize > maxSize) {
    const fileName = this.resourcePath;
    const errorMessage = `${fileName} is greater than ${maxSize} bytes, size: ${fileSize} bytes`;
    throw new Error(errorMessage);
  }

  const result = tinify.fromBuffer(sourceStr).result();

  return result
    .mediaType()
    .then((imageType) => {
      const type = imageType.split("/")[1];

      // Only compress supported files
      if (!["webp", "png", "jpg", "jpeg"].includes(type)) {
        return sourceStr;
      }
      return result.toBuffer();
    })
    .then((buffer) => {
      // https://tinypng.com/developers/reference/nodejs#compressing-images
      callback(null, buffer);
    })
    .catch((error) => {
      callback(error, null);
    });
};

module.exports.raw = true;

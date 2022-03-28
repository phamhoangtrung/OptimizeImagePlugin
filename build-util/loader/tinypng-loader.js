const tinify = require("tinify");

// Get API key: https://tinypng.com/developers
tinify.key = process.env.TINIFY_KEY;

function bytesToMegabytes(bytes) {
  return bytes * Math.pow(2, -20);
}

module.exports = function (sourceStr) {
  const callback = this.async();

  const maxSize = 5; //MB

  const fileSize = bytesToMegabytes(sourceStr.length);

  if (fileSize > maxSize) {
    const fileName = this.resourcePath;
    return callback(new Error(`${fileName} is greater than ${maxSize}MB`), null);
  }

  return tinify.fromBuffer(sourceStr).toBuffer(callback);
};

module.exports.raw = true;

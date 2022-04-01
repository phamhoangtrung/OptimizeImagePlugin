function getMediaInfo(url) {
  const strArray = url.split('.');
  return [strArray[0], strArray[strArray.length - 1]];
}

const defaultSupportTypeReg = /\.(png|jpe?g|webp)/i;
const nonSupportType = ['gif'];

module.exports = {
  getMediaInfo,
  nonSupportType,
  defaultSupportTypeReg,
};

const PicToWebp = require('pic-to-webp');
const OptimizeImagePlugin = require('./build-util/OptimizeImagePlugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(jpeg|jpg|png|webp)/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new OptimizeImagePlugin({
      toWebp: true,
    }),
  ],
};

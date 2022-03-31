const { OptimizeImagePlugin, WebpConverterPlugin, TinyPNGPlugin } = require('./optimize-image-plugin');
const tinifyKey = 'QWP40jkWrBvZ0P2kQ9h1gRSl3HLTCW96';

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
        },
      },
    ],
  },
  plugins: [
    new OptimizeImagePlugin({
      optimizePlugin: new TinyPNGPlugin(tinifyKey),
      transformPlugin: new WebpConverterPlugin('webp'),
    }),
  ],
};

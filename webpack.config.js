const { OptimizeImagePlugin, WebpConverterPlugin, TinyPNGPlugin } = require('./OptimizeImagePlugin');
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
      optimizePlugin: new TinyPNGPlugin({ key: tinifyKey }),
      transformPlugin: new WebpConverterPlugin(),
    }),
  ],
};

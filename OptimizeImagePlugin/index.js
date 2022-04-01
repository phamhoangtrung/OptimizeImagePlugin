const OptimizeImagePlugin = require('./OptimizeImagePlugin');

const TinyPNGPlugin = require('./OptimizationPlugins/TinyPNGPlugin');

const WebpConverterPlugin = require('./TransformationPlugins/WebpConverterPlugin');

module.exports = {
  OptimizeImagePlugin,
  TinyPNGPlugin,
  WebpConverterPlugin,
};

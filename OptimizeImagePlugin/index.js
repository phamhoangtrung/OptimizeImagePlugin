const OptimizeImagePlugin = require('./OptimizeImagePlugin');

const TinyPNGPlugin = require('./OptimizationPlugins/TinyPNGPlugin');
const ImageminPlugin = require('./OptimizationPlugins/ImageminPlugin');
const BaseOptimizationPlugin = require('./OptimizationPlugins/BaseOptimizationPlugin');

const BaseTransformationPlugin = require('./TransformationPlugins/BaseTransformationPlugin');
const WebpConverterPlugin = require('./TransformationPlugins/WebpConverterPlugin');
const ImageConvertPlugin = require('./TransformationPlugins/ImageConvertPlugin');

module.exports = {
  OptimizeImagePlugin,

  BaseOptimizationPlugin,
  TinyPNGPlugin,
  ImageminPlugin,

  BaseTransformationPlugin,
  WebpConverterPlugin,
  ImageConvertPlugin,
};

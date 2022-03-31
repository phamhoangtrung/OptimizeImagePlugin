const { OptimizeImagePlugin } = require("./OptimizeImagePlugin");
const TinyPNGPlugin = require("./optimize-plugins/tinypng");
const WebpConverterPlugin = require("./transform-plugins/webp-converter");
const BaseTransformPlugin = require("./transform-plugins/base-transform-plugin");

module.exports = {
  OptimizeImagePlugin,
  TinyPNGPlugin,
  WebpConverterPlugin,
  BaseTransformPlugin,
};

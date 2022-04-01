# OptimizeImagePlugin

```js
module.exports = {
  // ...
  plugins: [
    new OptimizeImagePlugin({
      // build-in optimize plugin
      // required
      // can be customized to use other minify libs
      optimizePlugin: new TinyPNGPlugin({
        key: tinifyKey,
      }),

      // build-in transform plugin
      // optional
      // can be customized to transform into PNG or more
      transformPlugin: new WebpConverterPlugin(),
    }),
  ],
};
```

## Build-in Plugin

```js
// optimizePlugin
new TinyPNGPlugin({ key: tinifyKey });
new ImageminPlugin();

//transformPlugin
new ImageConvertPlugin('png'); // only support png and jpg
new WebpConverterPlugin();
```

## Define your own custom (optimize | transform) plugin

```ts
const { RawSource } = require('webpack-sources');

// optimizePlugin interface sample
interface OptimizationPlugin {
  optimize: (rawSource: RawSource) => Promise<Buffer>;
}

// transformPlugin interface sample
interface TransformationPlugin {
  transform: (rawSource: RawSource) => Promise<Buffer>;
}
```

## Demo

```npm
  // yarn command
  yarn build

  // npm command
  npm run build
```

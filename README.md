## Only use with: .png, .jpeg, .webp

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

### Define your own custom plugin

```ts
const { RawSource } = require('webpack-sources');

// optimizePlugin interface sample
interface OptimizationPlugin {
  optimize: (buffer: RawSource) => Promise<Buffer>;
}

// optimizePlugin interface sample
interface TransformationPlugin {
  transform: (buffer: RawSource) => Promise<Buffer>;
}
```

### Demo

```npm
  // yarn command
  yarn build

  // npm command
  npm run build
```

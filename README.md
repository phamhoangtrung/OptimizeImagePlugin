## Only use with: .png, .jpeg, .webp

```js
module.exports = {
  // ...
  plugins: [
    new OptimizeImagePlugin({
      // build-in optimize plugin
      // required
      // can be customized to use other minify libs
      optimizePlugin: new TinyPNGPlugin(tinifyKey),

      // build-in transform plugin
      // optional
      // can be customized to transform into PNG or more
      transformPlugin: new WebpConverterPlugin('webp'),
    }),
  ],
};
```

### Demo

```npm
  // yarn command
  yarn build

  // npm command
  npm run build
```

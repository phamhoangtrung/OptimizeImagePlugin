## Only use with: .png, .jpeg, .webp

```js
module.exports = {
  // ...
  resolveLoader: {
    modules: ["node_modules", "build-util/loader"],
  },
  module: {
    rules: [
      //...
      {
        test: /\.jpg$/,
        use: ["file-loader", "tinypng-loader"], // use it first
      },
    ],
  },
};
```

```npm
  // yarn command
  yarn start

  // npm command
  npm start
```

## Only use with: .png, .jpeg, .webp

```js
module.exports = {
  // ...
  // set loader resolver to your custom
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

```js
  // Get API key: https://tinypng.com/developers
  // build-util/loader/tinypng-loader.js (line 4)
  tinify.key = process.env.TINIFY_KEY; // change this to your API key
```

```npm
  // yarn command
  yarn start

  // npm command
  npm start
```

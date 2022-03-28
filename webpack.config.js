require("dotenv").config();

module.exports = {
  mode: "production",
  resolveLoader: {
    modules: ["node_modules", "build-util/loader"],
  },
  module: {
    rules: [
      {
        test: /\.(jpeg|jpg|png|webp)/,
        use: [{ loader: "file-loader" }, { loader: "tinypng-loader", options: { limit: 5000000 } }],
      },
    ],
  },
};

require("dotenv").config();

module.exports = {
  mode: "production",
  resolveLoader: {
    modules: ["node_modules", "build-util/loader"],
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: ["file-loader", "tinypng-loader"],
      },
    ],
  },
};

const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.less$/,
    loaders: ["style-loader", "css-loader", "less-loader"],
    include: path.resolve(__dirname, "../")
  });
  config.module.rules.push({
    test: /\.(svg)$/,
    exclude: /node_modules/,
    loader: "raw-loader",
    include: path.resolve(__dirname, "../")
  });
  config.module.rules.push({
    test: /\.(gif|png)$/,
    loader: "url-loader?mimetype=image/png"
  });

  return config;
};

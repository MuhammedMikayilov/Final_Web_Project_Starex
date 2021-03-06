const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpeg|gif|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};

module.exports = (env, argv) => {
  const config = require(`./config/webpack.${
    argv.mode === "development" ? "dev" : "prod"
  }`);

  const { publicPath = false, frameMode = false } = argv;

  config.entry = path.resolve(__dirname, "src/index.js");
  config.output = {
    path: path.resolve(__dirname, "build"),
    filename: "[hash].bundle.js",
    chunkFilename: "[chunkhash].chunk.js",
    publicPath: publicPath || "/",
  };

  config.plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, "public"),
        to: path.resolve(__dirname, "build"),
      },
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(argv.mode),
        APP_VERSION: JSON.stringify(process.env.npm_package_version),
        PUBLIC_URL: JSON.stringify(publicPath),
        FRAME_MODE: JSON.stringify(frameMode),
      },
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ];

  return config;
};

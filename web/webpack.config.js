const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        "../database/db.sqlite"
      ],
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    library: "BerlinNames"
  },
  devServer: {
    static: path.resolve(__dirname, 'src'),
    port: 9000,
    liveReload: true,
    hot: true
  },
};

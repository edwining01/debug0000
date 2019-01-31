
var webpack = require('webpack')

module.exports = {
  mode: "development",
  resolve: {
    extensions: [`.js`],
  },
  entry: { index: "./index.js" },
  output: {
    publicPath: `/`,
    filename: `[name].js`,
  },
  devtool: `inline-source-map`,
  devServer: {
    inline: true,
    hot: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: `babel-loader`,
        }]
      },
      {
        test: /\.html$/,
        use: [ {
          loader: `html-loader`,
        }]
      },
    ]
  },
}

//Webpack:
//For dev: webpack-dev-server --progress --colors
//For compile: webpack
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var entry = require('webpack-glob-entry');
module.exports = {
    entry:entry('./scripts/**/*.js'),
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules!postcss-loader')}
        ]
    },
    plugins: [new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'build/index.html',
      template:"index.ejs",
  }),
  new ExtractTextPlugin("build/stylesheet.css")
  ]
};

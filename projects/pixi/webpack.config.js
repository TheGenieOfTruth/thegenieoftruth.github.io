//Webpack:
//For dev: webpack-dev-server --progress --colors
//For compile: webpack
module.exports = {
    entry:'./index.js',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
      rules:[
        {
        "loaders": [
            { "test": /\.js$/, "use":["script-loader"]}
        ]
      }
      ]
    }
};

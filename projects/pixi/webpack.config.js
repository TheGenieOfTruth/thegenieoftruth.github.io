//Webpack:
//For dev: webpack-dev-server --progress --colors
//For compile: webpack
module.exports = {
    devServer:{inline:true},
    entry:'./scripts/index.js',
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

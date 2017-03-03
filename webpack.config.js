//Webpack:
//For dev: webpack-dev-server --progress --colors
//For compile: webpack
module.exports = {
    devServer:{inline:true},
    entry:'./projects/pixi/scripts/index.js',
    output: {
        path: __dirname,
        filename: "projects/pixi/bundle.js"
    },
    module: {
      rules:[
            { "test": /\.js$/, "use":["script-loader"]}
      ]
    }
};

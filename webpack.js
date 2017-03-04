//Webpack:
//For dev: webpack-dev-server --progress --colors
//For compile: webpack
module.exports = function(cwd){
    return {
    "entry":'./'+cwd+'scripts/index.js',
    "output": {
        "path":require("path").resolve("./"+cwd),
        "filename": cwd+"bundle.js"
    },
    "module": {
      "rules":[
            { "test": /\.js$/, "use":["script-loader"]}
      ]
    }
}
};

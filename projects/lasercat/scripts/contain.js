module.exports = function(sprite,width,height,callback){
    var exit = []
    if (sprite.position.x < 0) {
        exit.push("l")
    }
    if(sprite.position.x+sprite.width > width){
        exit.push("r")
    }
    if (sprite.position.y-sprite.width/2 < 0) {
        exit.push("u")
    }
    if(sprite.position.y+sprite.width/2 > height){
        exit.push("d")
    }
    function handle(code,cb){
        if(exit.indexOf(code)!=-1){
            cb()
        }
    }
    callback(handle)
}

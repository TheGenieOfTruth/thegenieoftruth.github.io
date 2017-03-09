module.exports = function(sprite,width,height,callback){
    var exit = []
    if (sprite.position.x < 0) {
        exit.push("l")
        exit.push("y")
    }
    if(sprite.position.x > width){
        exit.push("r")
        exit.push("y")
    }
    if (sprite.position.y-sprite.width/2 < 0) {
        exit.push("u")
        exit.push("y")
    }
    if(sprite.position.y+sprite.width/2 > height){
        exit.push("d")
        exit.push("y")
    }
    function handle(code,cb){
        if(exit.indexOf(code)!=-1){
            cb()
        }
    }
    callback(handle)
}

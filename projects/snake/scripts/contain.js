module.exports = function(sprite,width,height,callback){
    var exit = []
    if (sprite.position.x < 0) {
        exit.push("l")
    }
    if(sprite.position.x > width){
        exit.push("r")
    }
    if (sprite.position.y < 0) {
        exit.push("u")
    }
    if(sprite.position.y > height){
        exit.push("d")
    }
    function handle(code,cb){
        if(exit.indexOf(code)!=-1){
            cb()
        }
    }
    if(exit.length>0){
        callback(handle)
    }
}

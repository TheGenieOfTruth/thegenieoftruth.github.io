module.exports = function(type){
    var shapes = require("./shapes")
    if(type==="laser"){
        var bullet = new PIXI.Sprite(PIXI.utils.TextureCache["assets/laser.png"])
        bullet.cooldown = 0
        bullet.vel = 20
        bullet.acc = 0
        bullet.anchor.x = 0.5
        bullet.anchor.y = 0.5
        return bullet
    }
}

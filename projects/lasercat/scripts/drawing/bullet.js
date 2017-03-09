module.exports = function(type){
    var shapes = require("./shapes")
    if(type==="laser"){
        var bullet = new PIXI.Sprite(PIXI.utils.TextureCache["assets/laser.png"])
        bullet.cooldown = 20
        bullet.vel = 0
        bullet.acc = 2
        bullet.scale.x = 2
        bullet.scale.y = 2
        bullet.anchor.x = 0.5
        bullet.anchor.y = 0.5
        return bullet
    }
}

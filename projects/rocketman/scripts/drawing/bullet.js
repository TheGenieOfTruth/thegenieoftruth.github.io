module.exports = function(type){
    var shapes = require("./shapes")
    //If someone runs bullet("laser"), create a bullet in the following way
    if(type==="laser"){
        //Creates a new bullet based on the laser image
        var bullet = new PIXI.Sprite(shapes.rectangle(1000,500,"#e74c3c"))
        bullet.scale.y = 0.5
        //Wait five frames before shooting again
        bullet.cooldown = 10
        //Move 5 pixels forward every frame
        bullet.vel = 20
        //Increase velocity every frame
        bullet.acc = 0
        //Sideways shaking
        bullet.shake = 0
        //Speed increase shake
        bullet.burst = 0
        //Roots the bullet at the cat's face correctly
        bullet.anchor.x = 0
        bullet.anchor.y = 0.5
        return bullet
    }
}

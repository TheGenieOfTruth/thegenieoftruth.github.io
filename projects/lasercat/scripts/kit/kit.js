module.exports = new function(){
    var contain = require("./../physics/contain")
    var move = require("./../physics/move.js")
    var a = this
    this.cooldown = 0
    this.bullets = []
    this.init = function(sprite,stage,renderer){
        a.sprite = sprite
        a.stage = stage
        a.renderer = renderer
    }
    this.loop = function(){
        a.cooldown--
    }
    this.shoot = function(bullet){
        bullet = require("./../drawing/bullet")(bullet)
        if(a.cooldown<=0){
            a.cooldown = bullet.cooldown
            bullet.x = a.sprite.x+a.sprite.width+bullet.width*bullet.anchor.x-5
            bullet.y = a.sprite.y+2*a.sprite.height/3
            dx = a.renderer.plugins.interaction.mouse.global.x-bullet.x;
            dy = a.renderer.plugins.interaction.mouse.global.y-bullet.y;
            bullet.rotation = Math.atan2(dy,dx);
            a.bullets.push(bullet)
            a.stage.addChild(bullet)
        }
    }
    this.bullet = function(){
    a.bullets.forEach(function(bullet,index){
        move(bullet,bullet.vel, (bullet.rotation* (180 / Math.PI)))
        bullet.vel+=bullet.acc
        contain(bullet,a.renderer.width,a.renderer.height,function(handle){
            handle("y",function(){
                a.stage.removeChild(bullet)
                a.bullets.splice(index,1)
            })
        })
    })
}
}

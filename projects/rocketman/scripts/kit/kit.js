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
    this.shoot = function(bullet){
        bullet = require("./../drawing/bullet")(bullet)
        if(a.cooldown<=0){
            a.cooldown = bullet.cooldown
            bullet.x = a.sprite.x+a.sprite.width+bullet.width*bullet.anchor.x
            bullet.y = a.sprite.y+a.sprite.height/3
            dx = a.renderer.plugins.interaction.mouse.global.x-bullet.x;
            dy = a.renderer.plugins.interaction.mouse.global.y-bullet.y;
            bullet.rotation = Math.atan2(dy,dx)+bullet.shake/100-Math.random()*bullet.shake/50;
            a.bullets.push(bullet)
            a.stage.addChild(bullet)
        }
    }
    function extrender(sprite){
        return {
            "width":sprite.width,
            "height":sprite.height
        }
    }
    this.bullet = function(){
    a.cooldown--
    a.bullets.forEach(function(bullet,index){
        move(bullet,bullet.vel+bullet.burst/100-Math.random()*bullet.vel*bullet.burst/50, (bullet.rotation* (180 / Math.PI)))
        bullet.vel+=bullet.acc
        contain(bullet,a.renderer.width,a.renderer.height,function(handle){
            handle("y",function(){
                if(bullet.counting === undefined){
                    bullet.counting = bullet.width*2/Math.abs(bullet.vel)
                } else{
                    bullet.counting--
                }
                if(bullet.counting <= 0){
                a.stage.removeChild(bullet)
                a.bullets.splice(index,1)
                }
            })
            handle("n",function(){
                bullet.counting = undefined
            })
        },extrender(bullet))
    })
}
}

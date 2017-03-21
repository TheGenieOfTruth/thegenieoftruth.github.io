module.exports = new function() {
    var a = this
    this.obstacles = []
    this.init = function(player, stage, renderer, ground) {
        a.player = player
        a.stage = stage
        a.renderer = renderer
        a.ground = ground
    }
    this.create = function() {
        var types = ["smash","gap"]
        var type = types[Math.round(Math.random()*types.length)]
        var sprite = a.player
        var renderer = a.renderer
        var stage = a.stage
        var ground = a.ground
        var shapes = require("./../drawing/shapes")
        var loc = renderer.width
        var height = renderer.height
        var pc = new PIXI.Container()
        var obstacle = new PIXI.Sprite(shapes.rectangle(20, 1, "#444444"))
        obstacle.x = loc
        obstacle.oriheight = Math.random() * (height - ground.height - sprite.height * 5)
        obstacle.height = obstacle.oriheight
        var counter = new PIXI.Sprite(shapes.rectangle(20, 1, "#444444"))
        counter.x = loc
        counter.oriheight = height - obstacle.height
        counter.height = counter.oriheight
        counter.y = obstacle.height + sprite.height * 5
        pc.addChild(obstacle);
        pc.addChild(counter);
        pc.type = type
        stage.addChild(pc);
    }
    this.move = function(obj) {
        var sprite = a.player
        var renderer = a.renderer
        var stage = a.stage
        var ground = a.ground
        var collide = require("./../physics/collide")
        var debug = require("./../tools/debug")
        debug("Width", sprite.width)
        debug("Height", sprite.height)
        stage.children.forEach(function(obstacle, index) {
            obstacle.x -= 2
            if(obstacle.type == "smash"){
            		var s1 = obstacle.children[0]
            		var s2 = obstacle.children[1]
            		s1.height = s1.oriheight+Math.sin(obstacle.x/50)*50
            		s2.height = s2.oriheight+Math.sin(obstacle.x/50)*50
            		s2.y = s1.oriheight + sprite.height * 5 - Math.sin(obstacle.x/50)*50
            	}
            debug("Obstacle x " + Math.floor(index), obstacle.children[0].worldTransform.tx)
            obstacle.children.forEach(function(val) {

      
                collide(val, sprite, function(handle) {
                    handle("y", function() {
                        document.getElementById("resume")
                            .onclick()
                    })
                })
            })
            if (obstacle.children[0].worldTransform.tx + obstacle.children[0].width < 0) {
                stage.removeChild(obstacle)
            }
        })
    }
}
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
        var types = ["smash"]
        var type = types[Math.floor(Math.random()*types.length)]
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
            	function smash(x){
            			return Math.sin(x/60)*60
            		}
            		var s1 = obstacle.children[0]
            		var s2 = obstacle.children[1]
            		s1.height = s1.oriheight+smash(obstacle.x+s1.oriheight) > 0 ? s1.oriheight+smash(obstacle.x+s1.oriheight) : 0
            		s2.height = s2.oriheight+smash(obstacle.x+s1.oriheight)
            		if(smash(obstacle.x+s1.oriheight)>=60){
								console.log("pop!")            			
            			}
            		s2.y = s1.oriheight + sprite.height * 5 - smash(obstacle.x+s1.oriheight)
            	}
            debug("Obstacle x " + index, obstacle.children[0].worldTransform.tx)
            obstacle.children.forEach(function(val,i) {
            	 debug("Obstacle x " + index + " - " + i, obstacle.children[0].worldTransform.tx)
                if(collide(val, sprite)){
                	console.log("Hit an obstacle")
                	console.log("Sprite X"+sprite.worldTransform.tx)
                	console.log("Sprite Y"+sprite.worldTransform.ty)
                	console.log("Obstacle X" + val.worldTransform.tx)
                	console.log("Obstacle Y" + val.worldTransform.ty)
                	console.log("Sprite Width: " + sprite.width)
                	console.log("Sprite Height: " + sprite.height)
                	console.log("ObstacleWidth: "+val.width)
                	console.log("ObstacleHeight: "+val.height)
                	document.getElementById("resume")
                            .onclick()
                            }
                })
                if (obstacle.children[0].worldTransform.tx + obstacle.children[0].width < 0) {
                stage.removeChild(obstacle)
            }
            })
        
        }
    }

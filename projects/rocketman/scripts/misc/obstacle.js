module.exports = new function() {
    var a = this
    this.obstacles = []
    this.score = 0
    this.init = function(player, stage, renderer, ground) {
        a.player = player
        a.stage = stage
        a.renderer = renderer
        a.ground = ground
    }
    this.shoot = function(){
        var types = ["laser"]
        var type = types[Math.floor(Math.random()*types.length)]
        var sprite = a.player
        var renderer = a.renderer
        var stage = a.stage
        var ground = a.ground
        var shapes = require("./../drawing/shapes")
        var loc = renderer.width
        var height = renderer.height
        var pc = new PIXI.Container()
        if(type === "laser"){
            var obstacle = new PIXI.Sprite(shapes.rectangle(30, 6, "#e74c3c"))
            obstacle.x = loc
            obstacle.y = Math.random() * (height - ground.height)
            pc.addChild(obstacle);
        }
        pc.rand = Math.random()
        pc.type = type
        stage.addChild(pc);
    }
    this.create = function() {
        var types = ["gap","smash"]
        var type = types[Math.floor(Math.random()*types.length)]
        var sprite = a.player
        var renderer = a.renderer
        var stage = a.stage
        var ground = a.ground
        var shapes = require("./../drawing/shapes")
        var loc = renderer.width
        var height = renderer.height
        var pc = new PIXI.Container()
        if(type === "gap" || type === "smash"){
            var obstacle = new PIXI.Sprite(shapes.rectangle(20, 1, "#444444"))
            obstacle.x = loc
            obstacle.oriheight = Math.random() * (height - ground.height - sprite.height * 7)
            obstacle.height = obstacle.oriheight
            var counter = new PIXI.Sprite(shapes.rectangle(20, 1, "#444444"))
            counter.x = loc
            counter.oriheight = height - obstacle.height
            counter.height = counter.oriheight
            counter.y = obstacle.height + sprite.height * 7
            pc.addChild(obstacle);
            pc.addChild(counter);
        }
        
        pc.rand = Math.random()
        pc.type = type
        stage.addChild(pc);
    }
    this.move = function(obj,endgame) {
        var sprite = a.player
        var renderer = a.renderer
        var stage = a.stage
        var ground = a.ground
        var collide = require("./../physics/collide")
        stage.children.forEach(function(obstacle, index) {
            if(obstacle.type == "laser"){
                obstacle.x -= 8
            }
            if(obstacle.type == "smash" || obstacle.type == "gap"){
                obstacle.x -= 2
            }
            if(obstacle.type == "smash"){
            	function smash(x){
            			return Math.sin(x/60+obstacle.rand)*60
            		}
            		var s1 = obstacle.children[0]
            		var s2 = obstacle.children[1]
            		s1.height = s1.oriheight+smash(obstacle.x+s1.oriheight) > 0 ? s1.oriheight+smash(obstacle.x+s1.oriheight) : 0
            		s2.height = s2.oriheight+smash(obstacle.x+s1.oriheight)
            		s2.y = s1.oriheight + sprite.height * 5 - smash(obstacle.x+s1.oriheight)
            	}
            obstacle.children.forEach(function(val,i) {
                if(collide({width:val.width,height:val.height,
                worldTransform:{
						ty:val.y,
						tx:obstacle.x+val.x          	
                	}}, sprite)){
                	endgame()
                            }
                })
                if (obstacle.children[0].worldTransform.tx + obstacle.children[0].width <= 0) {
                	
                stage.removeChild(obstacle)
                stage.children[index].x -= 2
            }
            })
        
        }
    }
2
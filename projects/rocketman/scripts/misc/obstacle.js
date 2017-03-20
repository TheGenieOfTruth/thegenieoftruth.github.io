module.exports = new function(){
	var a = this
	this.obstacles = []
	this.init = function(player,stage,renderer,ground){
		a.player = player
		a.stage = stage
		a.renderer = renderer
		a.ground = ground
	}
	this.create = function(){
		var sprite = a.player
		var renderer = a.renderer
		var stage = a.stage
		var ground = a.ground

		var shapes = require("./../drawing/shapes")
		var loc = renderer.width
		var height = renderer.height
		var pc = new PIXI.Container()
		pc.width = 20
		var obstacle = new PIXI.Sprite(shapes.rectangle(20,1,"#444444"))
		obstacle.x = loc
		obstacle.height=Math.random()*(height-ground.height-sprite.height*5)
		pc.addChild(obstacle);
		var counter = new PIXI.Sprite(shapes.rectangle(20,1,"#444444"))
		counter.x = loc
		counter.y = obstacle.height+sprite.height*5
		counter.height = height - obstacle.height
		pc.addChild(counter);
		stage.addChild(pc);
		a.obstacles.push(pc);
	}
	this.move = function(){
		var sprite = a.player
		var renderer = a.renderer
		var stage = a.stage
		var ground = a.ground
		var collide = require("./../physics/collide")
		a.obstacles.forEach(function(val,index){
			collide(sprite,val,function(handle){
            handle("y",function(){
                console.log("u wot m8")
            })

        })
			val.x-=2
			if(val.x+val.width<-renderer.width){
				
			}
		})
	}
}
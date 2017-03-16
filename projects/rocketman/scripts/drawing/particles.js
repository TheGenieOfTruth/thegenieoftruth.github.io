module.exports = function(obj){
	var shapes = require("./shapes")
	for(i=0;i<obj.amount;i++){
	var particle = new PIXI.Sprite(shapes.rectangle(obj.width,obj.height,obj.colors[Math.floor(Math.random()*obj.colors.length)]))
	particle.obj = obj
	particle.x = obj.x
	particle.y = obj.y
	particle.zOrder = 2;
	particle.kill = 10
	particle.killMax = 10
	obj.wrapper.addChild(particle)
}
}

module.exports = function(obj){
	if(obj==="handle"){
		particleContainer = arguments[1]
		particleContainer.children.forEach(function(val){

            if(val.kill !== 0){
                val.x+=val.obj.rangex[0]-Math.round(Math.random()*(val.obj.rangex[0]-val.obj.rangex[1]))
                val.y+=val.obj.rangey[0]-Math.round(Math.random()*(val.obj.rangey[0]-val.obj.rangey[1]))
                val.kill--
                val.alpha = val.kill/val.killMax
            } else{
                particleContainer.removeChild(val)
            }
        })
        return;
	}
	var shapes = require("./shapes")
	for(i=0;i<obj.amount;i++){
	var particle = new PIXI.Sprite(shapes.rectangle(obj.width,obj.height,obj.colors[Math.floor(Math.random()*obj.colors.length)]))
	particle.obj = obj
	particle.x = obj.x
	particle.y = obj.y
	particle.zOrder = 2;
	particle.kill = 12
	particle.killMax = 12
	obj.wrapper.addChild(particle)
}
}

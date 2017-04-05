module.exports = function(obj, pc, sprite) {
    if (obj === "handle") {
        particleContainer = arguments[1]
        particleContainer.children.forEach(function(val) {
            if (val.kill !== 0) {
                var dx = val.obj.rangex[0] - Math.round(Math.random() * (val.obj.rangex[0] - val.obj.rangex[1]))
                var dy = val.obj.rangey[0] - Math.round(Math.random() * (val.obj.rangey[0] - val.obj.rangey[1]))
                val.x += dx
                val.y += dy
                val.kill--
                    val.alpha = val.kill / val.killMax
            } else {
                particleContainer.removeChild(val)
            }
        })
        return;
    }
    var shapes = require("./shapes")
    for (i = 0; i < obj.amount; i++) {
        var particle = new PIXI.Sprite(shapes.rectangle(obj.width, obj.height, obj.colors[Math.floor(Math.random() * obj.colors.length)]))
        particle.obj = obj
        particle.x = obj.x  + obj.rangey[0] - Math.round(Math.random() * (obj.rangey[0] - obj.rangey[1]))
        particle.y = obj.y + obj.rangex[0] - Math.round(Math.random() * (obj.rangex[0] - obj.rangex[1]))
        particle.zOrder = 2;
        particle.kill = obj.kill;
        particle.killMax = obj.kill;
        obj.wrapper.addChild(particle)
    }
}

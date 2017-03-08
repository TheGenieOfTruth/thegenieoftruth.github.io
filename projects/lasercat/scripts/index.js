window.onload = function(){
var key = require("./key-press")
var collide = require("./collide")
var shapes = require("./shapes")
var contain = require("./contain")
var move = require("./move")
var fps = require("./fps")
key.listen()

    // create an new instance of a pixi stage
var all = new PIXI.Container()
var stage = new PIXI.Container();
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(772, 480);
renderer.backgroundColor = 0x888888
    // add the renderer view element to the DOM
shapes.renderer = renderer
document.body.appendChild(renderer.view);
// create a new Sprite using the texture
setup()

function setup() {

    var cat = new PIXI.Sprite(shapes.rectangle(100,50,"#e67e22"))
    var laser = new PIXI.Sprite(shapes.rectangle(10,4,"#e74c3c"))
    stage.addChild(cat)
    stage.addChild(laser)
    fps(30,function(){
        renderer.render(stage)
        laser.x+=15
    })
}
}

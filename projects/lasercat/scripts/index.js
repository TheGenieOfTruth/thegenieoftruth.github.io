window.onload = function(){
var key = require("./tools/key-press")
var click = require("./tools/click")
var collide = require("./physics/collide")
var shapes = require("./drawing/shapes")
var contain = require("./physics/contain")
var move = require("./physics/move")
var fps = require("./tools/fps")
var kit = require("./kit/kit.js")
key.listen("loud")
PIXI.loader
  .add("assets/laser.png")
  .add("assets/cat.png")
  .load(setup);
// create an new instance of a pixi stage
var stage = new PIXI.Container();
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(772, 480);
renderer.backgroundColor = 0x888888
    // add the renderer view element to the DOM
shapes.renderer = renderer
document.body.appendChild(renderer.view);
// create a new Sprite using the texture
stage.hitArea = new PIXI.Rectangle(0, 0, 1000, 1000);
stage.interactive = true;
click.listen(stage)
setup()

function setup() {
    var cat = new PIXI.Sprite(PIXI.utils.TextureCache["assets/cat.png"]);
    cat.scale.x = -3
    cat.anchor.x =1
    cat.scale.y = 3
    stage.addChild(cat)
    kit.init(cat,stage,renderer)
    fps(30,function(f,obj){
        kit.bullet()
        if(click.clicked){
            kit.shoot("laser")
        }
        renderer.render(stage)
    })
}
}

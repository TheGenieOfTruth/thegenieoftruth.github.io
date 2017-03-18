
window.onload = function(){
var key = require("./tools/key-press");
var click = require("./tools/click");
var collide = require("./physics/collide");
var shapes = require("./drawing/shapes");
var contain = require("./physics/contain");
var move = require("./physics/move");
var fps = require("./tools/fps");
var kit = require("./kit/kit.js");
var particles = require("./drawing/particles.js");
key.listen("loud");
// create an new instance of a pixi stage
var all = new PIXI.Container();
var stage = new PIXI.Container();
var particleContainer = new PIXI.Container();
all.addChild(stage);
all.addChild(particleContainer);
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
click.listen(stage);
setup();

function setup() {
    var player = new PIXI.Sprite(shapes.rectangle(25,25),"#2ecc71");
    var ground = new PIXI.Sprite(shapes.rectangle(772,35,"#2ecc71"))
    ground.y = 445;
    ground.abs = ground.y-player.height
    player.y =ground.abs;
    player.xvel = 0;
    player.yvel = 0;
    player.anchor.x = 0.5;
    player.anchor.y = 0.5;
    stage.addChild(player);
    stage.addChild(ground);
    kit.init(player,stage,renderer);
    fps(30,function(f,obj){
        kit.bullet();
        particleContainer.children.forEach(function(val){
            if(val.kill !== 0){
                val.x+=20-Math.round(Math.random()*40)-player.xvel
                val.y+=20-Math.round(Math.random()*30)-player.yvel
                val.kill--
                val.alpha = val.kill/val.killMax
            } else{
                particleContainer.removeChild(val)
            }
        })
        if(click.clicked){
            kit.shoot("laser");
        }
        key.check([65,37], function() {
            player.xvel += -2;
                //Left
        })
        key.check([68,39], function() {
            player.xvel += 2;
                //Right
        })
        key.check([87,38,32], function() {
            player.yvel += 1.2
            particles({
            "amount":50,
            "x":player.x+player.width/2,
            "y":player.y+player.height,
            "width":5,
            "height":5,
            "colors":["#e74c3c","#e67e22","#f1c40f"],
            "wrapper":particleContainer
        })
        },function(){
            player.yvel -= 1
        })
        key.check([83,40], function() {
                //Down
        })
        player.x+=player.xvel;
        player.y+=-player.yvel;
        if(player.y < 0){player.yvel *= -0.5;player.y = 0}
        else if(player.y > ground.abs && (player.yvel<0)) {player.yvel *= -0.5;player.y=ground.abs}
        player.xvel*=0.8;
        renderer.render(all);
    });
}
}

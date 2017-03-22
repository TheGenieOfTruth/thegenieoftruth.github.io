
window.onload = function(){
var key = require("./tools/key-press");
var click = require("./tools/click");
var collide = require("./physics/collide");
var shapes = require("./drawing/shapes");
var contain = require("./physics/contain");
var move = require("./physics/move");
var fps = require("./tools/fps");
var kit = require("./misc/kit");
var obstacle = require("./misc/obstacle")
var particles = require("./drawing/particles");
var pause = require("./misc/handlePause");
var debug = require("./tools/debug")
key.listen();
// create an new instance of a pixi stage
var all = new PIXI.Container();
var stage = new PIXI.Container();
var obstacles = new PIXI.Container()
var particleContainer = new PIXI.Container();
all.addChild(obstacles);
all.addChild(particleContainer);
all.addChild(stage);
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
// create a renderer instance.
var height = 500
var renderer = PIXI.autoDetectRenderer(Math.floor(height*1.61), height,null,true);
function fit(val){
    val.width = renderer.width
    val.height = renderer.height
}
fit(all)
fit(stage)
fit(obstacles)
fit(particleContainer)
var pauseScreen = new PIXI.Sprite(shapes.rectangle(renderer.width,renderer.height,"rgba(44, 62, 80,0.9)"))
all.addChild(pauseScreen);
pauseScreen.visible = false;
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
    var iteration = 1;
    var particleMp = 1;
    (function(){
    function resetP(){
        console.log("oi")
        document.querySelectorAll(".p").forEach(function(val){
            val.className = "p"
        })
    }
    var targets = [["none",0],["low",.5],["high",1],["ridiculous",2],["max",15]]
    targets.forEach(function(val){
        document.getElementById(val[0]).onclick = function(){
            resetP()
            this.className+= " active"
            particleMp = val[1]
        }
    })
    })()
    document.getElementById("resume").onclick = function(){
        iteration++
        player.x = 0;
        player.y = ground.abs;
        player.xvel = 0;
        player.yvel = 0;
        obstacles.children = [];
    }
    var player = new PIXI.Sprite(shapes.rectangle(25,25),"#2ecc71");
    var ground = new PIXI.Sprite(shapes.rectangle(renderer.width,35,"#2ecc71"));
    player.zOrder = 1;
    ground.y = renderer.height-ground.height;
    ground.abs = ground.y-player.height
    player.y =ground.abs;
    player.xvel = 0;
    player.yvel = 0;
    stage.addChild(player);
    stage.addChild(ground);
    kit.init(player,stage,renderer,ground);
    obstacle.init(player,obstacles,renderer,ground);
    debug("Renderer width",renderer.width)
    fps(60,function(f,obj,every){
        debug("X",Math.round(player.x*1000)/1000)
        debug("Y",Math.round(player.y*1000)/1000)
        debug("X Velocity",Math.round(player.xvel*1000)/1000)
        debug("Y Velocity",Math.round(player.yvel*1000)/1000)
        debug("Obstacles",obstacles.children.length)
        debug("Particles",particleContainer.children.length)
        debug("Tethers",key.tethers.length)
        debug("Keymap",JSON.stringify(key.map))
        debug("Running",obj.going)
        debug("Iteration",iteration)
        //Custom function loops
        pause(obj,key,pauseScreen) //Handles pausing
        kit.bullet();
        every(50,function(){
            obstacle.shoot()
        })
        every(100,function(){
            obstacle.create();
        })
        obstacle.move(obj);
        if(click.clicked){
            kit.shoot("laser");
        }
        particles("handle",particleContainer)

        //Keypress handling
        key.check([65,37], function() {
            player.xvel += -1.2;
            if(player.y<ground.abs){
            particles({
            "amount":3*particleMp,
            "x":player.x+player.width,
            "y":player.y+player.height/2,
            "width":5,
            "height":5,
            "rangex":[30,-10],
            "rangey":[10,-10],
            "colors":["#e74c3c","#e67e22","#f1c40f"],
            "wrapper":particleContainer
        })
        }
                //Left
        })
        key.check([68,39], function() {
            player.xvel += 1.2;
            if(player.y<ground.abs){
            particles({
            "amount":3*particleMp,
            "x":player.x,
            "y":player.y+player.height/2,
            "width":5,
            "height":5,
            "rangex":[-30,10],
            "rangey":[10,-10],
            "colors":["#e74c3c","#e67e22","#f1c40f"],
            "wrapper":particleContainer
        })
        }
                //Right
        })
        key.check([87,38,32], function() {
            player.yvel += .75
            particles({
            "amount":15*particleMp,
            "x":player.x+player.width/2,
            "y":player.y+player.height,
            "width":5,
            "height":5,
            "rangex":[10,-10],
            "rangey":[30,-10],
            "colors":["#e74c3c","#e67e22","#f1c40f"],
            "wrapper":particleContainer
          })}
          ,function(){
              player.yvel -= .6
          })
        key.check([40,83],function(){
          //Down
          player.yvel-= .3
          particles({
          "amount":3*particleMp,
           "yd":-player.yvel+5,
            "xd":player.xvel,
          "x":player.x+player.width/2,
          "y":player.y,
          "width":5,
          "height":5,
          "rangex":[10,-10],
          "rangey":[-30,10],
          "colors":["#e74c3c","#e67e22","#f1c40f"],
          "wrapper":particleContainer
      })
        })

        //Bonus physics
        player.x+=player.xvel;
        player.y+=-player.yvel;
        if(player.y < 0){player.yvel *= -0.6;player.y = 0;player.xvel*=0.75;}
        else if(player.y > ground.abs && (player.yvel<0)) {player.yvel *= -0.6;player.y=ground.abs;player.xvel*=0.75;}
        else{player.xvel*=0.85};
        if(player.yvel>0){
            player.yvel*=0.9
        }
        //Render
        renderer.render(all);
    });
}
}

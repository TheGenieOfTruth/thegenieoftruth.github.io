window.onload = function() {
    var key = require("./tools/key-press");
    var click = require("./tools/click");
    var collide = require("./physics/collide");
    var shapes = require("./drawing/shapes");
    var contain = require("./physics/contain");
    var move = require("./physics/move");
    var fps = require("./tools/fps");
    var particles = require("./drawing/particles");
    var pause = require("./misc/handlePause");
    var debug = require("./tools/debug");
    var config = require("./config");
    key.listen();
    // create an new instance of a pixi stage
    var all = new PIXI.Container();
    var stage = new PIXI.Container();
    var particleContainer = new PIXI.Container();
    var blocks = new PIXI.Container();
    all.addChild(particleContainer);
    all.addChild(stage);
    all.addChild(blocks);
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
    // create a renderer instance.
    var height = 120
    var renderer = PIXI.autoDetectRenderer(height*1.6, height, null, true);
    var pauseScreen = new PIXI.Sprite(shapes.rectangle(renderer.width, renderer.height, "rgba(44, 62, 80,0.9)"))
    var text = new PIXI.Text("Game paused", {
        font: "30px Pixel",
        fill: "white"
    });
    text.anchor.x = 0.5;
    text.x = renderer.width / 2
    text.y = 200
    pauseScreen.addChild(text);
    all.addChild(pauseScreen);
    pauseScreen.visible = false;
    renderer.backgroundColor = 0xaaaaaa
        // add the renderer view element to the DOM
    shapes.renderer = renderer
    document.body.appendChild(renderer.view);
    // create a new Sprite using the texture
    stage.hitArea = new PIXI.Rectangle(0, 0, 1000, 1000);
    stage.interactive = true;
    click.listen(stage);
    setup();
    for(i=config.blocks.l.left;i<renderer.width/config.squareSize-config.blocks.l.right;i++){
        for(j=config.blocks.l.top;j<renderer.height/config.squareSize-config.blocks.l.bottom;j++){
            var block = new PIXI.Sprite(shapes.rectangle(config.squareSize,config.squareSize,Math.random() > 0.02 ? "#8B4513" : "#3498db"))
            block.x = i*config.squareSize
            block.y = j*config.squareSize
            blocks.addChild(block)
        }
    }
    function setup() {
        var player = new PIXI.Sprite(shapes.rectangle(config.squareSize, config.squareSize));
        player.zOrder = 1;
        player.xvel = 0;
        player.yvel = 0;
        stage.addChild(player);
        var durability = 10;
        var outport = undefined
        fps(60, function(f, obj, every) {
            outport = obj
            particles("handle", particleContainer)
             //Keypress handling
            player.x+=1
            blocks.children.forEach(function(val){
                if(collide(player,val)){
                    blocks.removeChild(val)
                    durability = 50;
                } else{
                    durability = 10;
                }
            })
            
            //Render
            renderer.render(all);
        });
    }
}
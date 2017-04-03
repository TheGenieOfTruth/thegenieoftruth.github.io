window.onload = function() {
    PIXI.Sprite.prototype.bringToFront = function() {
        if (this.parent) {
            var parent = this.parent;
            parent.removeChild(this);
            parent.addChild(this);
        }
    }
    var sound = new Howl({
        src: ['assets/song.mp3'],
        loop: true
    });
    require("./misc/noscroll")();
    var key = require("./tools/key-press");
    var shapes = require("./drawing/shapes");
    var fps = require("./tools/fps");
    var particles = require("./drawing/particles");
    var pause = require("./misc/handlePause");
    key.listen();
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
    var renderer = PIXI.autoDetectRenderer(Math.floor(height * 1.61), height, null, true);
    renderer.backgroundColor = 0x888888
        // add the renderer view element to the DOM
    shapes.renderer = renderer
    document.body.appendChild(renderer.view);
    // create a new Sprite using the texture
    stage.hitArea = new PIXI.Rectangle(0, 0, 1000, 1000);
    stage.interactive = true;
    setup()
    function setup() {

        var outport = undefined
        //PAUSE CODE
        var pauseScreen = new PIXI.Sprite(shapes.rectangle(renderer.width, renderer.height, "rgba(44, 62, 80,0.9)"))
        pauseScreen.visible = false;
        var text = new PIXI.Text("Game paused", {
            font: "30px Pixel",
            fill: "white"
        });
        text.anchor.x = 0.5;
        text.x = renderer.width / 2
        text.y = 200
        pauseScreen.addChild(text);
        stage.addChild(pauseScreen);
        outport = new fps(60, function(f, obj, every) {
            //Custom function loops
            particles("handle", particleContainer)
                //Keypress handling
            pause.handle(obj, key, pauseScreen, sound, false, false) //Handles pausing
                //Render
            renderer.render(all);
        });
    }
}

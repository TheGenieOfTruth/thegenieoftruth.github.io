window.onload = function() {
    var jammed = false;
    var sound = new Howl({
        src: ['assets/placeholder.mp3'],
        loop: true
    });
    sound.play()
    PIXI.Sprite.prototype.bringToFront = function() {
        if (this.parent) {
            var parent = this.parent;
            parent.removeChild(this);
            parent.addChild(this);
        }
    }
    require("./misc/noscroll")();
    var key = require("./tools/key-press");
    var shapes = require("./drawing/shapes");
    var fps = require("./tools/fps");
    var particles = require("./drawing/particles");
    var pause = require("./misc/handlePause");
    key.listen();
    // create an new instance of a pixi stage
    var all = new PIXI.Container();
    var stage = new PIXI.Container();
    var particleContainer = new PIXI.Container();
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
    PIXI.loader.add("assets/mute/mute.json").load(setup)

    function setup() {
        //MUTE CODE
        var mute = new PIXI.Sprite(PIXI.loader.resources["assets/mute/mute.json"].textures["unmute.png"]);
        var muted = false
            // Opt-in to interactivity
        mute.interactive = true;

        function fMute() {
            muted = !muted
            if (muted) {
                mute.setTexture(PIXI.loader.resources["assets/mute/mute.json"].textures["mute.png"])
                sound.mute(true)
            } else {
                mute.setTexture(PIXI.loader.resources["assets/mute/mute.json"].textures["unmute.png"])
                sound.mute(false)
            }
            renderer.render(all)
        }
        // Shows hand cursor
        mute.buttonMode = true;
        mute.x = 7
        mute.on('pointerdown', fMute);
        stage.addChild(mute);
        key.waitDown(77, fMute, true)
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
            particles("handle", particleContainer)
            pause.handle(obj, key, pauseScreen, sound, mute) //Handles pausing
                //Render
            renderer.render(all);
        });
    }
}

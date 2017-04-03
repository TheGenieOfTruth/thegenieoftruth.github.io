window.onload = function() {
    var jammed = false;
    var sound = new Howl({
        src: ['assets/whoosh.mp3'],
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
    var obstacle = require("./misc/obstacle")
    var particles = require("./drawing/particles");
    var pause = require("./misc/handlePause");
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
        var iteration = 1;
        var particleMp = 1;

        function endgame() {
            if (typeof check == "undefined") {
                outport.stop()
                ground.bringToFront()
                score.bringToFront()
                jammed = true;
                check = new fps(30, function(f, obj) {
                        ground.y = (renderer.height - 35) - Math.pow(f, 2)
                        ground.height = (35) + Math.pow(f, 2)
                        score.y = (495 - score.height) + Math.pow(f, 2)
                        renderer.render(all)
                        if (f > 30) {
                            obj.stop()
                            var t = new PIXI.Text("0", {
                                font: "60px Pixel",
                                fill: "white"
                            });
                            t.anchor.x = 0.5;
                            t.x = renderer.width / 2
                            t.y = 200
                            stage.addChild(t);
                            new fps(30, function(fn, objn) {
                                renderer.render(all)
                                t.setText(Math.floor(Math.pow(fn, 2.1)))
                                if (Math.pow(fn, 2.1) >= obstacle.score) {
                                    t.setText(obstacle.score)
                                    objn.stop()
                                    new fps(30, function(fr, obja) {
                                        renderer.render(all)
                                        obstacle.score = 0
                                        outport.restart()
                                        outport.start()
                                        pauseScreen.visible = false
                                        pause.allowed = true
                                        iteration++
                                        player.x = 0;
                                        player.y = ground.abs;
                                        player.xvel = 0;
                                        player.yvel = 0;
                                        obstacles.children = [];
                                        t.y = 200 + Math.pow(fr, 2)
                                        ground.y = (renderer.height - 35) - Math.pow(30 - fr, 2)
                                        ground.height = (35) + Math.pow(30 - fr, 2)
                                        score.y = (495 - score.height) + Math.pow(30 - fr, 2)
                                        if (fr >= 30) {
                                            stage.removeChild(text)
                                            jammed = false;
                                            obja.stop()
                                            check = undefined
                                        }
                                    })
                                }
                            })
                        }
                    })
                    /*
                     */
            }
        }
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
        var player = new PIXI.Sprite(shapes.rectangle(25, 25), "#2ecc71");
        var ground = new PIXI.Sprite(shapes.rectangle(renderer.width, 35, "#2ecc71"));
        player.zOrder = 1;
        ground.y = renderer.height - ground.height;
        ground.abs = ground.y - player.height
        player.y = ground.abs;
        player.xvel = 0;
        player.yvel = 0;
        stage.addChild(player);
        stage.addChild(ground);
        obstacle.init(player, obstacles, renderer, ground);
        key.waitDown(77, fMute, true)
        var outport = undefined
            //SCORE CODE
        var score = new PIXI.Text("0", {
            font: "30px Pixel",
            fill: "white"
        });
        score.anchor.x = 0;
        score.x = 10
        score.y = 495 - score.height
        stage.addChild(score);
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
            obstacle.score += Math.floor(player.x / 50 + f / 100) + 1
            score.setText("Score: " + obstacle.score);
            //Custom function loops
            if (f > 120) {
                every(50, function() {
                    obstacle.shoot()
                })
            }
            every(100, function() {
                obstacle.create();
            })
            particles("handle", particleContainer)
                //Keypress handling
            key.check([65, 37], function() {
                player.xvel += -1.2;
                if (player.y < ground.abs) {
                    particles({
                        "amount": 3 * particleMp,
                        "x": player.x + player.width,
                        "y": player.y + player.height / 2,
                        "width": 5,
                        "height": 5,
                        "rangex": [30, -10],
                        "rangey": [10, -10],
                        "colors": ["#e74c3c", "#e67e22", "#f1c40f"],
                        "wrapper": particleContainer
                    })
                }
                //Left
            })
            key.check([68, 39], function() {
                player.xvel += 1.2;
                if (player.y < ground.abs) {
                    particles({
                        "amount": 3 * particleMp,
                        "x": player.x,
                        "y": player.y + player.height / 2,
                        "width": 5,
                        "height": 5,
                        "rangex": [-30, 10],
                        "rangey": [10, -10],
                        "colors": ["#e74c3c", "#e67e22", "#f1c40f"],
                        "wrapper": particleContainer
                    })
                }
                //Right
            })
            key.check([87, 38, 32], function() {
                player.yvel += .75
                particles({
                    "amount": 15 * particleMp,
                    "x": player.x + player.width / 2,
                    "y": player.y + player.height,
                    "width": 5,
                    "height": 5,
                    "rangex": [10, -10],
                    "rangey": [30, -10],
                    "colors": ["#e74c3c", "#e67e22", "#f1c40f"],
                    "wrapper": particleContainer
                })
            }, function() {
                player.yvel -= .4
            })
            key.check([40, 83], function() {
                    //Down
                    player.yvel -= .3
                    particles({
                        "amount": 3 * particleMp,
                        "yd": -player.yvel + 5,
                        "xd": player.xvel,
                        "x": player.x + player.width / 2,
                        "y": player.y,
                        "width": 5,
                        "height": 5,
                        "rangex": [10, -10],
                        "rangey": [-30, 10],
                        "colors": ["#e74c3c", "#e67e22", "#f1c40f"],
                        "wrapper": particleContainer
                    })
                })
                //Bonus physics
            player.x += player.xvel;
            player.y += -player.yvel;
            if (player.x <= 0) {
                player.xvel *= -0.6
                player.x = 0
            }
            if (player.x > renderer.width) {
                obstacle.score++
                    player.invincible = true
                player.xvel += 5
                player.xvel *= -12
            }
            if (player.xvel >= -0.1) {
                player.invincible = false
            }
            if (player.y < 0) {
                player.yvel *= -0.4;
                player.y = 0;
                player.xvel *= 0.75;
            } else if (player.y > ground.abs && (player.yvel < 0)) {
                player.yvel *= -0.4;
                player.y = ground.abs;
                player.xvel *= 0.75;
            } else {
                player.xvel *= 0.85
            };
            if (player.yvel > 0) {
                player.yvel *= 0.9
            }
            obstacle.move(obj, endgame);
            pause.handle(obj, key, pauseScreen, sound, jammed, mute) //Handles pausing
                //Render
            renderer.render(all);
        });
    }
}
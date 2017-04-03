/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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
	    __webpack_require__(1)();
	    var key = __webpack_require__(2);
	    var shapes = __webpack_require__(3);
	    var fps = __webpack_require__(4);
	    var obstacle = __webpack_require__(6)
	    var particles = __webpack_require__(8);
	    var pause = __webpack_require__(9);
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function() {
	    var keys = {};
	    window.addEventListener("keydown", function(e) {
	        keys[e.keyCode] = true;
	        switch (e.keyCode) {
	            case 37:
	            case 39:
	            case 38:
	            case 40: // Arrow keys
	            case 32:
	                e.preventDefault();
	                break; // Space
	            default:
	                break; // do not block other keys
	        }
	    }, false);
	    window.addEventListener('keyup', function(e) {
	        keys[e.keyCode] = false;
	    }, false);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = new function() {
	    var a = this
	    this.map = [];
	    this.tethers = [];
	    this.listen = function() {
	        var param = arguments[0] == undefined ? false : arguments[0]
	        document.onkeydown = function(e) {
	            e = e || window.event;
	            e = e.which || e.keyCode || 0
	            if (a.map.indexOf(e) == -1) {
	                a.map.push(e)
	            }
	            a.tethers.forEach(function(tether, index) {
	                if (tether.type == "down") {
	                    if (e === tether.key) {
	                        tether.func()
	                        if (!tether.perma) a.tethers.splice(index, 1)
	                    }
	                }
	            })
	        };
	        document.onkeyup = function(e) {
	            e = e || window.event;
	            e = e.which || e.keyCode || 0
	                // use e.keyCode
	            if (a.map.indexOf(e) != -1) {
	                a.map.splice(a.map.indexOf(e), 1)
	            }
	            a.tethers.forEach(function(tether, index) {
	                if (tether.type == "up") {
	                    if (e === tether.key) {
	                        tether.func()
	                        if (!tether.perma) a.tethers.splice(index, 1)
	                    }
	                }
	            })
	        };
	    }
	    this.check = function(key, callback, not) {
	        if (typeof key != "object") {
	            key = [key]
	        }
	        for (i = 0; i < key.length; i++) {
	            if (a.map.indexOf(key[i]) != -1) {
	                callback()
	                i = key.length
	                return;
	            }
	        }
	        if (not !== undefined) {
	            not()
	        }
	    }
	    this.waitUp = function(key, func, perma) {
	        if (perma === undefined) {
	            perma = false
	        }
	        a.tethers.push({
	            "key": key,
	            "func": func,
	            "type": "up",
	            "perma": perma
	        })
	    }
	    this.waitDown = function(key, func, perma) {
	        if (perma === undefined) {
	            perma = false
	        }
	        a.tethers.push({
	            "key": key,
	            "func": func,
	            "type": "down",
	            "perma": perma
	        })
	    }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = new function() {
	    var a = this
	    this.renderer = ""
	    this.canvas = function(width, height) {
	        var canvas = document.createElement('canvas');
	        canvas.width = width
	        canvas.height = height
	        var ctx = canvas.getContext("2d")
	        return {
	            "canvas": canvas,
	            "ctx": ctx
	        }
	    }
	    this.rectangle = function(width, height, color) {
	        var b = a.canvas(width, height)
	        b.ctx.fillStyle = color
	        b.ctx.fillRect(0, 0, width, height);
	        return PIXI.Texture.fromCanvas(b.canvas);
	    }
	    this.circle = function(radius, color) {
	        var b = a.canvas(radius * 2, radius * 2)
	        b.ctx.fillStyle = color
	        b.ctx.beginPath();
	        b.ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
	        b.ctx.fill();
	        return PIXI.Texture.fromCanvas(b.canvas);
	    }
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(fps, cb) {
	    this.going = true
	    this.start = function() {
	        this.going = true
	        requestAnimationFrame(draw);
	    }
	    this.resume = this.start
	    this.stop = function() {
	        this.going = false
	    }
	    this.pause = this.stop
	    this.toggle = function() {
	        this.going = !this.going
	    }
	    this.latch = function(a) {
	        cb = __webpack_require__(5)(cb, a)
	    }
	    this.restart = function() {
	        ct = 0;
	    }
	    var a = this
	    var now;
	    var then = Date.now();
	    var interval = 1000 / fps;
	    var delta;
	    var ct = 0;

	    function every(count, callback) {
	        if (ct % count == 0) {
	            callback()
	        }
	    }

	    function draw() {
	        if (a.going) {
	            requestAnimationFrame(draw);
	        }
	        now = Date.now();
	        delta = now - then;
	        if (delta > interval) {
	            ct++
	            // update time stuffs
	            // Just `then = now` is not enough.
	            // Lets say we set fps at 10 which means
	            // each frame must take 100ms
	            // Now frame executes in 16ms (60fps) so
	            // the loop iterates 7 times (16*7 = 112ms) until
	            // delta > interval === true
	            // Eventually this lowers down the FPS as
	            // 112*10 = 1120ms (NOT 1000ms).
	            // So we have to get rid of that extra 12ms
	            // by subtracting delta (112) % interval (100).
	            // Hope that makes sense.
	            then = now - (delta % interval);
	            cb(ct, a, every)
	        }
	    }
	    draw();
	    return this;
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(a,b){
	    return function(){
	        a.call(this,arguments)
	        b.call(this,arguments)
	    }
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = new function() {
	    var a = this
	    this.obstacles = []
	    this.score = 0
	    this.init = function(player, stage, renderer, ground) {
	        a.player = player
	        a.stage = stage
	        a.renderer = renderer
	        a.ground = ground
	    }
	    this.shoot = function() {
	        var types = ["laser"]
	        var type = types[Math.floor(Math.random() * types.length)]
	        var sprite = a.player
	        var renderer = a.renderer
	        var stage = a.stage
	        var ground = a.ground
	        var shapes = __webpack_require__(3)
	        var loc = renderer.width
	        var height = renderer.height
	        var pc = new PIXI.Container()
	        if (type === "laser") {
	            var obstacle = new PIXI.Sprite(shapes.rectangle(30, 6, "#e74c3c"))
	            obstacle.x = loc
	            obstacle.y = Math.random() * (height - ground.height)
	            pc.addChild(obstacle);
	        }
	        pc.rand = Math.random()
	        pc.type = type
	        stage.addChild(pc);
	    }
	    this.create = function() {
	        var types = ["gap", "smash"]
	        var type = types[Math.floor(Math.random() * types.length)]
	        var sprite = a.player
	        var renderer = a.renderer
	        var stage = a.stage
	        var ground = a.ground
	        var shapes = __webpack_require__(3)
	        var loc = renderer.width
	        var height = renderer.height
	        var pc = new PIXI.Container()
	        if (type === "gap" || type === "smash") {
	            var obstacle = new PIXI.Sprite(shapes.rectangle(20, 1, "#444444"))
	            obstacle.x = loc
	            obstacle.oriheight = Math.random() * (height - ground.height - sprite.height * 7)
	            obstacle.height = obstacle.oriheight
	            var counter = new PIXI.Sprite(shapes.rectangle(20, 1, "#444444"))
	            counter.x = loc
	            counter.oriheight = height - obstacle.height
	            counter.height = counter.oriheight
	            counter.y = obstacle.height + sprite.height * 7
	            pc.addChild(obstacle);
	            pc.addChild(counter);
	        }
	        pc.rand = Math.random()
	        pc.type = type
	        stage.addChild(pc);
	    }
	    this.move = function(obj, endgame) {
	        var sprite = a.player
	        var renderer = a.renderer
	        var stage = a.stage
	        var ground = a.ground
	        var collide = __webpack_require__(7)
	        stage.children.forEach(function(obstacle, index) {
	            if (obstacle.type == "laser") {
	                obstacle.x -= 8
	            }
	            if (obstacle.type == "smash" || obstacle.type == "gap") {
	                obstacle.x -= 2
	            }
	            if (obstacle.type == "smash") {
	                function smash(x) {
	                    return Math.sin(x / 60 + obstacle.rand) * 60
	                }
	                var s1 = obstacle.children[0]
	                var s2 = obstacle.children[1]
	                s1.height = s1.oriheight + smash(obstacle.x + s1.oriheight) > 0 ? s1.oriheight + smash(obstacle.x + s1.oriheight) : 0
	                s2.height = s2.oriheight + smash(obstacle.x + s1.oriheight)
	                s2.y = s1.oriheight + sprite.height * 5 - smash(obstacle.x + s1.oriheight)
	            }
	            obstacle.children.forEach(function(val, i) {
	                if (collide({
	                        width: val.width,
	                        height: val.height,
	                        worldTransform: {
	                            ty: val.y,
	                            tx: obstacle.x + val.x
	                        }
	                    }, sprite)) {
	                    endgame()
	                }
	            })
	            if (obstacle.children[0].worldTransform.tx + obstacle.children[0].width <= 0) {
	                stage.removeChild(obstacle)
	                stage.children[index].x -= 2
	            }
	        })
	    }
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(r1, r2) {
	    if (r1.invincible === true || r2.invincible === true) {
	        return false;
	    }
	    //Define the variables we'll need to calculate
	    var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
	    //hit will determine whether there's a collision
	    hit = false;
	    //Find the center points of each sprite
	    r1.centerX = r1.worldTransform.tx + r1.width / 2;
	    r1.centerY = r1.worldTransform.ty + r1.height / 2;
	    r2.centerX = r2.worldTransform.tx + r2.width / 2;
	    r2.centerY = r2.worldTransform.ty + r2.height / 2;
	    //Find the half-widths and half-heights of each sprite
	    r1.halfWidth = r1.width / 2;
	    r1.halfHeight = r1.height / 2;
	    r2.halfWidth = r2.width / 2;
	    r2.halfHeight = r2.height / 2;
	    //Calculate the distance vector between the sprites
	    vx = r1.centerX - r2.centerX;
	    vy = r1.centerY - r2.centerY;
	    //Figure out the combined half-widths and half-heights
	    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
	    combinedHalfHeights = r1.halfHeight + r2.halfHeight;
	    //Check for a collision on the x axis
	    if (Math.abs(vx) < combinedHalfWidths) {
	        //A collision might be occuring. Check for a collision on the y axis
	        if (Math.abs(vy) < combinedHalfHeights) {
	            return true;
	        }
	    } 
	    return false;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

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
	    var shapes = __webpack_require__(3)
	    for (i = 0; i < obj.amount; i++) {
	        var particle = new PIXI.Sprite(shapes.rectangle(obj.width, obj.height, obj.colors[Math.floor(Math.random() * obj.colors.length)]))
	        particle.obj = obj
	        particle.x = obj.x
	        particle.y = obj.y
	        particle.zOrder = 2;
	        particle.kill = 12
	        particle.killMax = 12
	        obj.wrapper.addChild(particle)
	    }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = new function() {
	    var a = this
	    this.allow = true
	    this.handle = function(obj, key, psc, sound, jammed, mute) {
	        if (!jammed) {
	            psc.bringToFront()
	            mute.bringToFront()

	            function wait() {
	                obj.start()
	                sound.volume(1);
	                psc.visible = false
	            }

	            function allow() {
	                a.allow = true
	            }
	            key.check(80, function() {
	                if (a.allow) {
	                    obj.stop()
	                    sound.volume(0.1);
	                    psc.visible = true
	                    a.allow = false
	                    key.waitUp(80, function() {
	                        key.waitDown(80, wait)
	                        key.waitUp(80, allow)
	                    })
	                }
	            })
	        }
	    }
	}

/***/ }
/******/ ]);
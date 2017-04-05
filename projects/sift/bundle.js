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

	window.onload = function () {
	    var jammed = false;
	    var sound = new Howl({
	        src: ['assets/placeholder.mp3'],
	        loop: true
	    });
	    sound.play();
	    PIXI.Sprite.prototype.bringToFront = function () {
	        if (this.parent) {
	            var parent = this.parent;
	            parent.removeChild(this);
	            parent.addChild(this);
	        }
	    };
	    __webpack_require__(1)();
	    var key = __webpack_require__(2);
	    var shapes = __webpack_require__(3);
	    var fps = __webpack_require__(4);
	    var particles = __webpack_require__(5);
	    var pause = __webpack_require__(6);
	    var colorize = __webpack_require__(7);
	    var click = __webpack_require__(8);

	    key.listen();
	    // create an new instance of a pixi stage
	    var all = new PIXI.Container();
	    var stage = new PIXI.Container();
	    var particleContainer = new PIXI.Container();
	    all.addChild(particleContainer);
	    all.addChild(stage);
	    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
	    // create a renderer instance.
	    var height = 500;
	    var renderer = PIXI.autoDetectRenderer(Math.floor(height * 1.61), height, null, true);
	    renderer.backgroundColor = 0x888888;
	    // add the renderer view element to the DOM
	    shapes.renderer = renderer;
	    document.body.appendChild(renderer.view);
	    // create a new Sprite using the texture
	    stage.hitArea = new PIXI.Rectangle(0, 0, 1000, 1000);
	    stage.interactive = true;
	    click.listen(stage);
	    PIXI.loader.add("assets/mute/mute.json").load(setup);

	    function setup() {
	        /* ## MUTE CODE START ## */
	        var mute = new PIXI.Sprite(PIXI.loader.resources["assets/mute/mute.json"].textures["unmute.png"]);
	        var muted = false;
	        mute.interactive = true;
	        function fMute() {
	            muted = !muted;
	            if (muted) {
	                mute.setTexture(PIXI.loader.resources["assets/mute/mute.json"].textures["mute.png"]);
	                sound.mute(true);
	            } else {
	                mute.setTexture(PIXI.loader.resources["assets/mute/mute.json"].textures["unmute.png"]);
	                sound.mute(false);
	            }
	            renderer.render(all);
	        }
	        mute.buttonMode = true;
	        mute.x = renderer.width - mute.width - 7;
	        mute.on('pointerdown', fMute);
	        stage.addChild(mute);
	        key.waitDown(77, fMute, true);
	        var outport = undefined;
	        var pauseScreen = new PIXI.Sprite(shapes.rectangle(renderer.width, renderer.height, "rgba(44, 62, 80,0.9)"));
	        pauseScreen.visible = false;
	        var text = new PIXI.Text("Game paused", {
	            font: "30px Pixel",
	            fill: "white"
	        });
	        text.anchor.x = 0.5;
	        text.x = renderer.width / 2;
	        text.y = 200;
	        pauseScreen.addChild(text);
	        stage.addChild(pauseScreen);
	        /* ## MUTE CODE END ## */
	        /* ## PLAYER CODE START ## */
	        player = new PIXI.Sprite();
	        stage.addChild(player);
	        player.xvel = 0;
	        player.yvel = 0;
	        /* ## PLAYER CODE END ## */
	        outport = new fps(60, function (f, obj, every) {
	            particles("handle", particleContainer);
	            pause.handle(obj, key, pauseScreen, sound, mute); //Handles pausing
	            key.check([65, 37], function () {
	                player.xvel -= 1;
	                //Left
	            });
	            key.check([68, 39], function () {
	                player.xvel += 1;
	                //Right
	            });
	            key.check([87, 38], function () {
	                player.yvel -= 1;
	                //Up
	            });
	            key.check([40, 83], function () {
	                player.yvel += 1;
	                //Down
	            });
	            player.x += player.xvel;
	            player.y += player.yvel;
	            player.xvel *= 0.8;
	            player.yvel *= 0.8;
	            particles({
	                "amount": 10,
	                "x": player.x + player.width / 2,
	                "y": player.y + player.height / 2,
	                "width": 5,
	                "height": 5,
	                "rangex": [-10, 10],
	                "rangey": [10, -10],
	                "colors": colorize["rainbow"](f + Math.random() * 20 - 10),
	                "wrapper": particleContainer,
	                "kill": 25
	            });
	            for (var i = -1; i < 1; i++) {
	                particles({
	                    "kill": 50,
	                    "amount": 1,
	                    "x": player.x + player.width / 2 + Math.random() * 120 - 60,
	                    "y": player.y + player.height / 2 + Math.random() * 120 - 60,
	                    "width": 5,
	                    "height": 5,
	                    "rangex": [-5, 5],
	                    "rangey": [5, -5],
	                    "colors": colorize["rainbow"](f + i * 50),
	                    "wrapper": particleContainer
	                });
	            }
	            particles({
	                "amount": 30,
	                "x": player.x + player.width / 2,
	                "y": player.y + player.height / 2,
	                "width": 5,
	                "height": 5,
	                "rangex": [-1, 1],
	                "rangey": [1, -1],
	                "colors": colorize["rainbow"](f),
	                "wrapper": particleContainer,
	                "kill": 10
	            });
	            //Render
	            renderer.render(all);
	        });
	    }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function () {
	    var keys = {};
	    window.addEventListener("keydown", function (e) {
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
	    window.addEventListener('keyup', function (e) {
	        keys[e.keyCode] = false;
	    }, false);
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = new function () {
	    var a = this;
	    this.map = [];
	    this.tethers = [];
	    this.listen = function () {
	        var param = arguments[0] == undefined ? false : arguments[0];
	        document.onkeydown = function (e) {
	            e = e || window.event;
	            e = e.which || e.keyCode || 0;
	            if (a.map.indexOf(e) == -1) {
	                a.map.push(e);
	            }
	            a.tethers.forEach(function (tether, index) {
	                if (tether.type == "down") {
	                    if (e === tether.key) {
	                        tether.func();
	                        if (!tether.perma) a.tethers.splice(index, 1);
	                    }
	                }
	            });
	        };
	        document.onkeyup = function (e) {
	            e = e || window.event;
	            e = e.which || e.keyCode || 0;
	            // use e.keyCode
	            if (a.map.indexOf(e) != -1) {
	                a.map.splice(a.map.indexOf(e), 1);
	            }
	            a.tethers.forEach(function (tether, index) {
	                if (tether.type == "up") {
	                    if (e === tether.key) {
	                        tether.func();
	                        if (!tether.perma) a.tethers.splice(index, 1);
	                    }
	                }
	            });
	        };
	    };
	    this.check = function (key, callback, not) {
	        if ((typeof key === "undefined" ? "undefined" : _typeof(key)) != "object") {
	            key = [key];
	        }
	        for (i = 0; i < key.length; i++) {
	            if (a.map.indexOf(key[i]) != -1) {
	                callback();
	                i = key.length;
	                return;
	            }
	        }
	        if (not !== undefined) {
	            not();
	        }
	    };
	    this.waitUp = function (key, func, perma) {
	        if (perma === undefined) {
	            perma = false;
	        }
	        a.tethers.push({
	            "key": key,
	            "func": func,
	            "type": "up",
	            "perma": perma
	        });
	    };
	    this.waitDown = function (key, func, perma) {
	        if (perma === undefined) {
	            perma = false;
	        }
	        a.tethers.push({
	            "key": key,
	            "func": func,
	            "type": "down",
	            "perma": perma
	        });
	    };
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = new function () {
	    var a = this;
	    this.renderer = "";
	    this.canvas = function (width, height) {
	        var canvas = document.createElement('canvas');
	        canvas.width = width;
	        canvas.height = height;
	        var ctx = canvas.getContext("2d");
	        return {
	            "canvas": canvas,
	            "ctx": ctx
	        };
	    };
	    this.rectangle = function (width, height, color) {
	        var b = a.canvas(width, height);
	        b.ctx.fillStyle = color;
	        b.ctx.fillRect(0, 0, width, height);
	        return PIXI.Texture.fromCanvas(b.canvas);
	    };
	    this.circle = function (radius, color) {
	        var b = a.canvas(radius * 2, radius * 2);
	        b.ctx.fillStyle = color;
	        b.ctx.beginPath();
	        b.ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
	        b.ctx.fill();
	        return PIXI.Texture.fromCanvas(b.canvas);
	    };
	}();

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function (fps, cb) {
	    this.going = true;
	    this.start = function () {
	        this.going = true;
	        requestAnimationFrame(draw);
	    };
	    this.resume = this.start;
	    this.stop = function () {
	        this.going = false;
	    };
	    this.pause = this.stop;
	    this.toggle = function () {
	        this.going = !this.going;
	    };
	    this.restart = function () {
	        ct = 0;
	    };
	    var a = this;
	    var now;
	    var then = Date.now();
	    var interval = 1000 / fps;
	    var delta;
	    var ct = 0;

	    function every(count, callback) {
	        if (ct % count == 0) {
	            callback();
	        }
	    }

	    function draw() {
	        if (a.going) {
	            requestAnimationFrame(draw);
	        }
	        now = Date.now();
	        delta = now - then;
	        if (delta > interval) {
	            ct++;
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
	            then = now - delta % interval;
	            cb(ct, a, every);
	        }
	    }
	    draw();
	    return this;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (obj, pc, sprite) {
	    if (obj === "handle") {
	        particleContainer = arguments[1];
	        particleContainer.children.forEach(function (val) {
	            if (val.kill !== 0) {
	                var dx = val.obj.rangex[0] - Math.round(Math.random() * (val.obj.rangex[0] - val.obj.rangex[1]));
	                var dy = val.obj.rangey[0] - Math.round(Math.random() * (val.obj.rangey[0] - val.obj.rangey[1]));
	                val.x += dx;
	                val.y += dy;
	                val.kill--;
	                val.alpha = val.kill / val.killMax;
	            } else {
	                particleContainer.removeChild(val);
	            }
	        });
	        return;
	    }
	    var shapes = __webpack_require__(3);
	    for (i = 0; i < obj.amount; i++) {
	        var particle = new PIXI.Sprite(shapes.rectangle(obj.width, obj.height, obj.colors[Math.floor(Math.random() * obj.colors.length)]));
	        particle.obj = obj;
	        particle.x = obj.x + obj.rangey[0] - Math.round(Math.random() * (obj.rangey[0] - obj.rangey[1]));
	        particle.y = obj.y + obj.rangex[0] - Math.round(Math.random() * (obj.rangex[0] - obj.rangex[1]));
	        particle.zOrder = 2;
	        particle.kill = obj.kill;
	        particle.killMax = obj.kill;
	        obj.wrapper.addChild(particle);
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = new function () {
	    var a = this;
	    this.allow = true;
	    this.handle = function (obj, key, psc, sound, mute) {
	        psc.bringToFront();
	        mute.bringToFront();

	        function wait() {
	            obj.start();
	            sound.volume(1);
	            psc.visible = false;
	        }

	        function allow() {
	            a.allow = true;
	        }
	        key.check(80, function () {
	            if (a.allow) {
	                obj.stop();
	                sound.volume(0.1);
	                psc.visible = true;
	                a.allow = false;
	                key.waitUp(80, function () {
	                    key.waitDown(80, wait);
	                    key.waitUp(80, allow);
	                });
	            }
	        });
	    };
	}();

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = new function () {
	    this["3xhex"] = function (frames) {
	        return "0123456789abcdef".split("").map(function (val) {
	            if (frames % 200 < 50) {
	                return "#" + val + val + "0000";
	            } else if (frames % 200 < 100) {
	                return "#00" + val + val + "00";
	            } else if (frames % 200 < 150) {
	                return "#0000" + val + val;
	            } else {
	                return "#" + val + val + val + val + val + val;
	            }
	        });
	    };
	    this["rainbow"] = function (frames) {
	        f = 0.01;
	        function rgbToHex(r, g, b) {
	            ra = Math.round;
	            return "#" + ((1 << 24) + (ra(r) << 16) + (ra(g) << 8) + ra(b)).toString(16).slice(1);
	        }
	        return this["10xlight"](rgbToHex(Math.sin(frames * f) * 127 + 128, Math.sin(frames * f + 2) * 127 + 128, Math.sin(frames * f + 4) * 127 + 128));
	    };
	    this["10xlight"] = function (val) {
	        function ColorLuminance(hex, lum) {

	            // validate hex string
	            hex = String(hex).replace(/[^0-9a-f]/gi, '');
	            if (hex.length < 6) {
	                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	            }
	            lum = lum || 0;

	            // convert to decimal and change luminosity
	            var rgb = "#",
	                c,
	                i;
	            for (i = 0; i < 3; i++) {
	                c = parseInt(hex.substr(i * 2, 2), 16);
	                c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
	                rgb += ("00" + c).substr(c.length);
	            }

	            return rgb;
	        }
	        var colors = [];
	        for (i = -5; i <= 5; i++) {
	            for (j = 0; j < Math.pow(5 - Math.abs(i), 2); j++) {
	                colors.push(ColorLuminance(val, i / 10));
	            }
	        }
	        return colors;
	    };
	}();

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = new function () {
	    a = this;
	    function down() {
	        a.clicked = true;
	    }
	    function up() {
	        a.clicked = false;
	    }
	    this.listen = function (sprite) {
	        sprite.on('mousedown', down).on('mouseup', up).on('mouseupoutside', up).on('touchstart', down).on('touchend', up).on('touchendoutside', up);
	    };
	}();

/***/ }
/******/ ]);
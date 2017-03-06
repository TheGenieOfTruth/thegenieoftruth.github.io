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
	        var key = __webpack_require__(1)
	        var collide = __webpack_require__(2)
	        var shapes = __webpack_require__(3)
	        var contain = __webpack_require__(4)
	        var fps = __webpack_require__(5)
	        key.listen()
	            // create an new instance of a pixi stage
	        var all = new PIXI.Container()
	        stage = new PIXI.Container();
	        var score = new PIXI.Container()
	        all.addChild(stage);
	        all.addChild(score)
	        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
	        // create a renderer instance.
	        var renderer = PIXI.autoDetectRenderer(640, 480);
	        renderer.backgroundColor = 0x888888
	            // add the renderer view element to the DOM
	        shapes.renderer = renderer
	        document.body.appendChild(renderer.view);
	        // create a new Sprite using the texture
	        setup()

	        function setup() {
	            var player = new PIXI.Sprite(shapes.rectangle(16, 16, "#27ae60"))
	            player.x = 16
	            var trail = []
	            for (i = 0; i < 3; i++) {
	                trail.push(new PIXI.Sprite(shapes.rectangle(16, 16, "#2ecc71")))
	                trail[i].x = 16 * i
	                stage.addChild(trail[i])
	            }
	            stage.addChild(player)
	            var direction = "r"
	            var hit = false
	            var powerup = new PIXI.Sprite(shapes.rectangle(16, 16, "#3498db"))
	            var enemies = []
	            powerup.ingame = false

	            function end() {
	                if (!hit) {
	                    player.setTexture(shapes.rectangle(16, 16, "#c0392b"))
	                    trail.forEach(function(val) {
	                        val.setTexture(shapes.rectangle(16, 16, "#e74c3c"))
	                    })
	                    hit = true
	                    stop()
	                    var end = new PIXI.Sprite(shapes.rectangle(1, renderer.height, "#2ecc71"))
	                    text = new PIXI.Text("", {
	                        font: "30px Pixel",
	                        fill: "white"
	                    });
	                    text.anchor.x = 0.5;
	                    text.x = renderer.width / 2
	                    text.y = 200
	                    score.addChild(end);
	                    score.addChild(text);
	                    var ct = 0
	                    fps(20, function(frames) {
	                        ct += 1
	                        end.width += ct
	                        renderer.render(all)
	                        if (frames > 40) {
	                            this.stop()
	                            var words = "Nooo! Snake died D:".split("")
	                            var piece = []

	                            function loop() {
	                                setTimeout(function() {
	                                    if(("Nooo! Snake died D:").length>piece.length){
	                                    loop()
	                                    console.log("ye")
	                                } else{
	                                    piece = piece.join("")+"\n"
	                                    renderer.render(all)
	                                    fps(10,function(frames){
	                                        text.setText(piece+"Score: " + frames)
	                                        renderer.render(all)
	                                        if(trail.length<frames){
	                                            this.stop()
	                                        }
	                                    })
	                                }
	                                    piece.push(words[0])
	                                    words.shift()
	                                    text.setText(piece.join(""))
	                                    renderer.render(all)
	                                }, 50)
	                            }
	                            loop()
	                        }
	                    })
	                }
	            }
	            fps(10, function(frames, stop) {
	                key.check(40, function() {
	                    if (direction == "r" || direction == "l") {
	                        direction = "d"
	                    }
	                    //Down
	                })
	                key.check(39, function() {
	                    if (direction == "u" || direction == "d") {
	                        direction = "r"
	                    }
	                    //Right
	                })
	                key.check(38, function() {
	                    if (direction == "r" || direction == "l") {
	                        direction = "u"
	                    }
	                    //Up
	                })
	                key.check(37, function() {
	                    if (direction == "u" || direction == "d") {
	                        direction = "l"
	                    }
	                    //Left
	                })
	                    if (frames % 30 === 1) {
	                        if (!powerup.ingame) {
	                            powerup.ingame = true
	                            do {
	                                powerup.x = Math.round(Math.random() * (renderer.width / 16)) * 16
	                                powerup.y = Math.round(Math.random() * (renderer.height / 16)) * 16
	                            } while ((powerup.x === player.x) && (powerup.y === player.y) || trail.filter(function(val) {
	                                    return powerup.x === val.x && powerup.y === val.y
	                                })
	                                .length > 0 || enemies.filter(function(val) {
	                                    return powerup.x === val.x && powerup.y === val.y
	                                })
	                                .length > 0
	                            )
	                            }
	                            stage.addChild(powerup)
	                        }
	                        if (frames % 50 === 1) {
	                            enemies.push(new PIXI.Sprite(shapes.rectangle(16, 16, "#e74c3c")))
	                            var e = enemies[enemies.length - 1]
	                            do {
	                                console.log(trail.filter(function(val) {
	                                        e.x === val.x && e.y === val.y
	                                    }))
	                                e.x = Math.round(Math.random() * (renderer.width / 16)) * 16
	                                e.y = Math.round(Math.random() * (renderer.height / 16)) * 16
	                            } while ((e.x === powerup.x && e.y === powerup.y) || trail.filter(function(val) {
	                                    return e.x === val.x && e.y === val.y
	                                })
	                                .length > 0 || enemies.filter(function(val) {
	                                    return e.x === val.x && e.y === val.y
	                                })
	                                .length > 1||(function(){
	                                    for(i=-2;i<2;i++){
	                                        for(j=-2;j<2;j++){
	                                            if(e.x === player.x+i*16 && e.y === player.y+j*16) return true
	                                        }
	                                    }
	                                    return false
	                                })()
	                            )
	                            stage.addChild(e)
	                        }
	                        collide(powerup, player, function() {
	                            powerup.ingame = false
	                            stage.removeChild(powerup)
	                            trail.push(new PIXI.Sprite(shapes.rectangle(16, 16, "#2ecc71")))
	                            stage.addChild(trail[trail.length - 1])
	                        })
	                        enemies.forEach(function(val){
	                            collide(val, player, function() {
	                                end()
	                            })
	                        })
	                        for (i = trail.length - 1; i > 0; i--) {
	                            trail[i].x = trail[i - 1].x
	                            trail[i].y = trail[i - 1].y
	                        }
	                        trail[0].x = player.x
	                        trail[0].y = player.y
	                        switch (direction) {
	                            case 'l':
	                                player.x -= 16
	                                break;
	                            case 'u':
	                                player.y -= 16
	                                break;
	                            case 'r':
	                                player.x += 16
	                                break;
	                            case 'd':
	                                player.y += 16
	                                break;
	                        }
	                        trail.forEach(function(val) {
	                            collide(val, player, function() {
	                                end()
	                            })
	                        })
	                        contain(player, renderer.width, renderer.height, function(handle) {
	                            end()
	                        })
	                        if (frames < 10) {
	                            trail.push(new PIXI.Sprite(shapes.rectangle(16, 16, "#2ecc71")))
	                            stage.addChild(trail[trail.length - 1])
	                        }
	                        renderer.render(all)
	                    })
	            }
	        }


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = new function(){
	    var a = this
	    this.map = [];
	    this.listen = function(){
	        var param = arguments[0] == undefined ? false : arguments[0]
	        document.onkeydown = function (e) {
	            e = e || window.event;
	            e = e.which || e.keyCode || 0
	            if(a.map.indexOf(e) == -1){
	                a.map.push(e)
	            }
	            if(param == "loud"){
	                console.log(a.map)
	            }
	        };
	        document.onkeyup = function (e) {
	            e = e || window.event;
	            e = e.which || e.keyCode || 0
	            // use e.keyCode
	            if(a.map.indexOf(e) != -1){
	                a.map.splice(a.map.indexOf(e),1)
	            }
	            if(param == "loud"){
	                console.log(a.map)
	            }
	        };
	    }
	    this.check = function(key,callback){
	        if(a.map.indexOf(key)!=-1){
	            callback()
	        }
	    }

	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(r1, r2,cb) {

	  //Define the variables we'll need to calculate
	  var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

	  //hit will determine whether there's a collision
	  hit = false;

	  //Find the center points of each sprite
	  r1.centerX = r1.x + r1.width / 2;
	  r1.centerY = r1.y + r1.height / 2;
	  r2.centerX = r2.x + r2.width / 2;
	  r2.centerY = r2.y + r2.height / 2;

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

	      cb()
	    }
	  }
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = new function(){
	    var a = this
	    this.renderer = ""
	    this.canvas = function(width,height){
	        var canvas = document.createElement('canvas');
	        canvas.width = width
	        canvas.height = height
	        var ctx = canvas.getContext("2d")
	        return {
	            "canvas":canvas,
	            "ctx":ctx
	        }
	    }
	    this.rectangle = function(width,height,color){
	        var b = a.canvas(width,height)
	        b.ctx.fillStyle = color
	        b.ctx.fillRect(0,0,width,height);

	        return PIXI.Texture.fromCanvas(b.canvas);
	    }
	    this.circle = function(radius,color){
	        var b = a.canvas(radius*2,radius*2)
	        b.ctx.fillStyle = color
	        b.ctx.beginPath();
	        b.ctx.arc(radius,radius,radius,0,2*Math.PI);
	        b.ctx.fill();

	        return PIXI.Texture.fromCanvas(b.canvas);
	    }

	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(sprite,width,height,callback){
	    var exit = []
	    if (sprite.position.x < 0) {
	        exit.push("l")
	    }
	    if(sprite.position.x > width){
	        exit.push("r")
	    }
	    if (sprite.position.y < 0) {
	        exit.push("u")
	    }
	    if(sprite.position.y > height){
	        exit.push("d")
	    }
	    function handle(code,cb){
	        if(exit.indexOf(code)!=-1){
	            cb()
	        }
	    }
	    if(exit.length>0){
	        callback(handle)
	    }
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(fps,cb){
	this.going = true
	this.start = function(){
	    this.going = true
	}
	this.resume = this.start
	this.stop = function(){
	    this.going = false
	}
	this.pause = this.stop
	this.toggle = function(){
	    this.going = !this.going
	}
	var a = this
	var now;
	var then = Date.now();
	var interval = 1000/fps;
	var delta;
	var ct = 0;

	function draw() {
	    if(a.going){
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

	        cb(ct,this.stop)
	    }
	}

	draw();
	}


/***/ }
/******/ ]);
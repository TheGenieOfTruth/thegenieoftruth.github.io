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
	    var key = __webpack_require__(1);
	    var click = __webpack_require__(2);
	    var collide = __webpack_require__(3);
	    var shapes = __webpack_require__(4);
	    var contain = __webpack_require__(5);
	    var move = __webpack_require__(6);
	    var fps = __webpack_require__(7);
	    var particles = __webpack_require__(9);
	    var pause = __webpack_require__(10);
	    var debug = __webpack_require__(11);
	    var config = __webpack_require__(12);
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

/***/ },
/* 1 */
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
	            if (param == "loud") {
	                console.log(a.map)
	            }
	            
	            a.tethers.forEach(function(tether,index){
	                if(tether.type == "down"){
	                if(e === tether.key){
	                   tether.func()
	                   a.tethers.splice(index, 1)
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
	            if (param == "loud") {
	                console.log(a.map)
	            }
	            a.tethers.forEach(function(tether,index){
	                if(tether.type == "up"){
	                if(e === tether.key){
	                   tether.func()
	                   a.tethers.splice(index, 1)
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
	    this.waitUp = function(key,func){
	        a.tethers.push({
	            "key":key,
	            "func":func,
	            "type":"up"
	        })
	    }
	    this.waitDown = function(key,func){
	        a.tethers.push({
	            "key":key,
	            "func":func,
	            "type":"down"
	        })
	    }
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = new function(){
	    a = this
	    function down(){
	        a.clicked = true
	    }
	    function up(){
	        a.clicked = false
	    }
	    this.listen = function(sprite){
	        sprite
	            .on('mousedown', down)
	            .on('mouseup', up)
	            .on('mouseupoutside', up)
	            .on('touchstart', down)
	            .on('touchend', up)
	            .on('touchendoutside', up);
	    }
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(r1, r2) {
	  if(r1.invincible === true || r2.invincible === true){
	    return false;
	  }
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

	      //There's definitely a collision happening
	      hit = true;
	    } else {

	      //There's no collision on the y axis
	      hit = false;
	    }
	  } else {

	    //There's no collision on the x axis
	    hit = false;
	  }

	  //`hit` will be either `true` or `false`
	  return hit;
	};


/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	module.exports = function(sprite,width,height,callback,extra){
	    if(extra===undefined){
	        extra = {
	            "height":0,
	            "width":0
	        }
	    }
	    var exit = []
	    if (sprite.position.x < -extra.width) {
	        exit.push("l")
	        exit.push("y")
	    }
	    if(sprite.position.x > width-extra.width){
	        exit.push("r")
	        exit.push("y")
	    }
	    if (sprite.position.y-sprite.height/2 < -extra.height) {
	        exit.push("u")
	        exit.push("y")
	    }
	    if(sprite.position.y+sprite.width/2 > height-extra.height){
	        exit.push("d")
	        exit.push("y")
	    }
	    if(exit.length===0){
	        exit.push("n")
	    }
	    function handle(code,cb){
	        if(exit.indexOf(code)!=-1){
	            cb()
	        }
	    }
	    callback(handle)
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(object, distance,direction) {
		object.x = object.x + distance * Math.cos((direction*Math.PI)/180);
		object.y = object.y + distance * Math.sin((direction*Math.PI)/180);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(fps,cb){
	this.going = true
	this.start = function(){
	    this.going = true
	    requestAnimationFrame(draw);
	}
	this.resume = this.start
	this.stop = function(){
	    this.going = false
	}
	this.pause = this.stop
	this.toggle = function(){
	    this.going = !this.going
	}
	this.latch = function(a){
	    cb = __webpack_require__(8)(cb,a)
	}
	var a = this
	var now;
	var then = Date.now();
	var interval = 1000/fps;
	var delta;
	var ct = 0;
	function every(count,callback){
	    if(ct % count == 0){
	        callback()
	    }
	}
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

	        cb(ct,a,every)
	    }
	}

	draw();
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(a,b){
	    return function(){
	        a.call(this,arguments)
	        b.call(this,arguments)
	    }
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(obj,pc,sprite){
		if(obj==="handle"){
			particleContainer = arguments[1]
			particleContainer.children.forEach(function(val){

	            if(val.kill !== 0){
	            	var dx =val.obj.rangex[0]-Math.round(Math.random()*(val.obj.rangex[0]-val.obj.rangex[1]))
	            	var dy = val.obj.rangey[0]-Math.round(Math.random()*(val.obj.rangey[0]-val.obj.rangey[1]))
	                val.x+=dx
	                val.y+=dy
	        		
	                val.kill--
	                val.alpha = val.kill/val.killMax
	            } else{
	                particleContainer.removeChild(val)
	            }
	        })
	        return;
		}
		var shapes = __webpack_require__(4)
		for(i=0;i<obj.amount;i++){
		var particle = new PIXI.Sprite(shapes.rectangle(obj.width,obj.height,obj.colors[Math.floor(Math.random()*obj.colors.length)]))
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
/* 10 */
/***/ function(module, exports) {

	module.exports = new function(){
		var a = this
		this.allow = true
		this.handle = function(obj,key,psc){
		function wait(){
			obj.start()
			console.log("START")
			psc.visible = false
		}
		function allow(){
			a.allow = true
		}
			if(a.allow){
			obj.stop()
			console.log("STOP")
			psc.visible = true
			a.allow = false
			key.waitUp(80,function(){
				key.waitDown(80,wait)
				key.waitUp(80,allow)
			})}
		}

	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(idMessage,value){
		if(document.getElementById(idMessage) == null){
			var elem = document.createElement("dbg")
			elem.innerHTML = idMessage+": <label id = '"+idMessage+"'>"+value+"</label>"
			document.getElementsByTagName("body")[0].appendChild(elem)
			return;
		}
		document.getElementById(idMessage).innerHTML = value
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
		"squareSize":12,
		"player":{
			"speed":12 //Rate at which the player moves
		},
		"blocks":{
			"l":{ //Amount of blocks taken off of the...
				"left":0,
				"right":0,
				"top":0,
				"bottom":0
			}
		}
	}

/***/ }
/******/ ]);
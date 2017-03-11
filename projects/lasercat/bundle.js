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

	window.onload = function(){
	var key = __webpack_require__(1)
	var click = __webpack_require__(2)
	var collide = __webpack_require__(3)
	var shapes = __webpack_require__(4)
	var contain = __webpack_require__(5)
	var move = __webpack_require__(6)
	var fps = __webpack_require__(7)
	var kit = __webpack_require__(9)
	key.listen("loud")
	PIXI.loader
	  .add("assets/laser.png")
	  .add("assets/cat.png")
	  .load(setup);
	// create an new instance of a pixi stage
	var stage = new PIXI.Container();
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
	click.listen(stage)
	setup()

	function setup() {
	    var cat = new PIXI.Sprite(PIXI.utils.TextureCache["assets/cat.png"]);
	    cat.scale.x = -3
	    cat.anchor.x =1
	    cat.scale.y = 3
	    stage.addChild(cat)
	    kit.init(cat,stage,renderer)
	    fps(30,function(f,obj){
	        kit.bullet()
	        if(click.clicked){
	            kit.shoot("laser")
	        }
	        renderer.render(stage)
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

	module.exports = new function(){
	    a = this
	    function down(){
	        a.clicked = true
	        console.log("DOWN")
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

	module.exports = function(r1, r2,callback) {
	    var dx=(r1.x+r1.width/2)-(r2.x+r2.width/2);
	    var dy=(r1.y+r1.height/2)-(r2.y+r2.height/2);
	    var width=(r1.width+r2.width)/2;
	    var height=(r1.height+r2.height)/2;
	    var crossWidth=width*dy;
	    var crossHeight=height*dx;
	    var collision='none';
	    //
	    if(Math.abs(dx)<=width && Math.abs(dy)<=height){
	        collision = 'y'
	    }
	    function handle(code,cb){
	        if(collision == code){
	            cb()
	        }
	    }
	    callback(handle)
	}


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

	        cb(ct,a)
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

	module.exports = new function(){
	    var contain = __webpack_require__(5)
	    var move = __webpack_require__(6)
	    var a = this
	    this.cooldown = 0
	    this.bullets = []
	    this.init = function(sprite,stage,renderer){
	        a.sprite = sprite
	        a.stage = stage
	        a.renderer = renderer
	    }
	    this.shoot = function(bullet){
	        bullet = __webpack_require__(10)(bullet)
	        if(a.cooldown<=0){
	            a.cooldown = bullet.cooldown
	            bullet.x = a.sprite.x+a.sprite.width+bullet.width*bullet.anchor.x
	            bullet.y = a.sprite.y+a.sprite.height/3
	            dx = a.renderer.plugins.interaction.mouse.global.x-bullet.x;
	            dy = a.renderer.plugins.interaction.mouse.global.y-bullet.y;
	            bullet.rotation = Math.atan2(dy,dx)+bullet.shake/100-Math.random()*bullet.shake/50;
	            a.bullets.push(bullet)
	            a.stage.addChild(bullet)
	        }
	    }
	    function extrender(sprite){
	        return {
	            "width":sprite.width,
	            "height":sprite.height
	        }
	    }
	    this.bullet = function(){
	    a.cooldown--
	    a.bullets.forEach(function(bullet,index){
	        move(bullet,bullet.vel+bullet.burst/100-Math.random()*bullet.vel*bullet.burst/50, (bullet.rotation* (180 / Math.PI)))
	        bullet.vel+=bullet.acc
	        contain(bullet,a.renderer.width,a.renderer.height,function(handle){
	            handle("y",function(){
	                if(bullet.counting === undefined){
	                    bullet.counting = bullet.width/Math.abs(bullet.vel)+1
	                } else{
	                    bullet.counting--
	                }
	                if(bullet.counting <= 0){
	                a.stage.removeChild(bullet)
	                a.bullets.splice(index,1)
	                }
	            })
	        },extrender(bullet))
	    })
	}
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(type){
	    var shapes = __webpack_require__(4)
	    //If someone runs bullet("laser"), create a bullet in the following way
	    if(type==="laser"){
	        //Creates a new bullet based on the laser image
	        var bullet = new PIXI.Sprite(PIXI.utils.TextureCache["assets/laser.png"])
	        bullet.scale.y = 0.5
	        //Wait five frames before shooting again
	        bullet.cooldown = 10
	        //Move 5 pixels forward every frame
	        bullet.vel = 20
	        //Increase velocity every frame
	        bullet.acc = 0
	        //Sideways shaking
	        bullet.shake = 0
	        //Speed increase shake
	        bullet.burst = 0
	        //Roots the bullet at the cat's face correctly
	        bullet.anchor.x = 0
	        bullet.anchor.y = 0.5
	        return bullet
	    }
	}


/***/ }
/******/ ]);
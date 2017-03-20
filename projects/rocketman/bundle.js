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
	var key = __webpack_require__(1);
	var click = __webpack_require__(2);
	var collide = __webpack_require__(3);
	var shapes = __webpack_require__(4);
	var contain = __webpack_require__(5);
	var move = __webpack_require__(6);
	var fps = __webpack_require__(7);
	var kit = __webpack_require__(9);
	var obstacle = __webpack_require__(11)
	var particles = __webpack_require__(12);
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
	var renderer = PIXI.autoDetectRenderer(Math.floor(height*1.61), height);
	function fit(val){
	    val.width = renderer.width
	    val.height = renderer.height
	}
	fit(all)
	fit(stage)
	fit(obstacles)
	fit(particleContainer)
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
	    fps(60,function(f,obj,every){
	        //Custom function loops
	        kit.bullet();
	        every(100,function(){
	            obstacle.create();
	        })
	        obstacle.move();
	        if(click.clicked){
	            kit.shoot("laser");
	        }
	        particles("handle",particleContainer)

	        //Keypress handling
	        key.check([65,37], function() {
	            player.xvel += -1.2;
	            if(player.y<ground.abs){
	            particles({
	            "amount":3,
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
	            "amount":3,
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
	            "amount":15,
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
	          "amount":3,
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = new function() {
	    var a = this
	    this.map = [];
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

	module.exports = new function(){
	    var contain = __webpack_require__(5)
	    var move = __webpack_require__(6)
	    var a = this
	    this.cooldown = 0
	    this.bullets = []
	    this.init = function(sprite,stage,renderer,ground){
	        a.sprite = sprite
	        a.stage = stage
	        a.renderer = renderer
	        a.ground = ground
	    }
	    this.shoot = function(bullet){
	        bullet = __webpack_require__(10)(bullet)
	        if(a.cooldown<=0){
	            a.cooldown = bullet.cooldown
	            bullet.x = a.sprite.x+a.sprite.xvel+a.sprite.width/2+bullet.width*bullet.anchor.x
	            bullet.y = a.sprite.y+a.sprite.yvel+a.sprite.height/2
	            dx = a.renderer.plugins.interaction.mouse.global.x-bullet.x;
	            dy = a.renderer.plugins.interaction.mouse.global.y-bullet.y;
	            bullet.rotation = Math.atan2(dy,dx)+bullet.shake/100-Math.random()*bullet.shake/50;
	            move(bullet,a.sprite.width/2,(bullet.rotation* (180 / Math.PI)))
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
	        contain(bullet,a.renderer.width,a.renderer.height-a.ground.height,function(handle){
	            handle("y",function(){
	                if(bullet.counting === undefined){
	                    bullet.counting = 120
	                } else{
	                    bullet.counting--
	                }
	                if(bullet.counting <= 0){
	                a.stage.removeChild(bullet)
	                a.bullets.splice(index,1)
	                }
	            })
	            handle("n",function(){
	                bullet.counting = undefined
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
	        var bullet = new PIXI.Sprite(shapes.rectangle(30,10,"#e74c3c"))
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


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = new function(){
		var a = this
		this.obstacles = []
		this.init = function(player,stage,renderer,ground){
			a.player = player
			a.stage = stage
			a.renderer = renderer
			a.ground = ground
		}
		this.create = function(){
			var sprite = a.player
			var renderer = a.renderer
			var stage = a.stage
			var ground = a.ground

			var shapes = __webpack_require__(4)
			var loc = renderer.width
			var height = renderer.height
			var pc = new PIXI.Container()
			pc.width = 20
			var obstacle = new PIXI.Sprite(shapes.rectangle(20,1,"#444444"))
			obstacle.x = loc
			obstacle.height=Math.random()*(height-ground.height-sprite.height*5)
			pc.addChild(obstacle);
			var counter = new PIXI.Sprite(shapes.rectangle(20,1,"#444444"))
			counter.x = loc
			counter.y = obstacle.height+sprite.height*5
			counter.height = height - obstacle.height
			pc.addChild(counter);
			stage.addChild(pc);
			a.obstacles.push(pc);
		}
		this.move = function(){
			var sprite = a.player
			var renderer = a.renderer
			var stage = a.stage
			var ground = a.ground
			var collide = __webpack_require__(3)
			a.obstacles.forEach(function(val,index){
				collide(sprite,val,function(handle){
	            handle("y",function(){
	                console.log("u wot m8")
	            })

	        })
				val.x-=2
				if(val.x+val.width<-renderer.width){
					
				}
			})
		}
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(obj){
		if(obj==="handle"){
			particleContainer = arguments[1]
			particleContainer.children.forEach(function(val){

	            if(val.kill !== 0){
	                val.x+=val.obj.rangex[0]-Math.round(Math.random()*(val.obj.rangex[0]-val.obj.rangex[1]))
	                val.y+=val.obj.rangey[0]-Math.round(Math.random()*(val.obj.rangey[0]-val.obj.rangey[1]))
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


/***/ }
/******/ ]);
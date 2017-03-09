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
	var collide = __webpack_require__(2)
	var shapes = __webpack_require__(3)
	var contain = __webpack_require__(4)
	var move = __webpack_require__(5)
	key.listen("loud")

	    // create an new instance of a pixi stage
	var all = new PIXI.Container()
	stage = new PIXI.Container();
	var score = new PIXI.Container();
	all.addChild(stage);
	all.addChild(score);
	PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
	// create a renderer instance.
	var renderer = PIXI.autoDetectRenderer(400, 700);
	renderer.backgroundColor = 0x888888
	    // add the renderer view element to the DOM
	shapes.renderer = renderer
	document.body.appendChild(renderer.view);
	// create a new Sprite using the texture
	setup()
	p1score = new PIXI.Sprite(shapes.rectangle(1,25,"#3498db"));
	p1score.position.x = -1;
	p1score.position.y = 675;
	p1score.width = 400
	p1score.xvel = 0;
	p2score = new PIXI.Sprite(shapes.rectangle(1,25,"#e74c3c"));
	p2score.position.x = -1;
	p2score.position.y = 0;
	p2score.width = 400
	p2score.xvel = 0;
	score.addChild(p1score);
	score.addChild(p2score);
	text = new PIXI.Text("", {font:"30px Pixel", fill:"white"});
	text.anchor.x = 0.5;
	text.x = 200
	text.y = 200
	score.addChild(text);
	function setup() {

	     paddle1 = new PIXI.Sprite(shapes.rectangle(100,5,"#ffffff"));
	    paddle1.position.x = 150;
	    paddle1.position.y = 670;
	    paddle1.xvel = 0;
	    stage.addChild(paddle1);
	    paddle2 = new PIXI.Sprite(shapes.rectangle(100,5,"#ffffff"));
	   paddle2.position.x = 150;
	   paddle2.position.y = 25;
	   paddle2.xvel = 0;
	   stage.addChild(paddle2);
	     ball = new PIXI.Sprite(shapes.rectangle(10,10,"#ffffff"))
	    ball.position.x = 195;
	    ball.position.y = 150;
	    ball.direction = 45; //Prevents weird aliasing crap
	    ball.vel = 5;
	    var offset = 0;
	    stage.addChild(ball);
	    animate()
	    function animate() {
	        if(ball.y<0){
	            console.log("PLAYER ONE WINS")
	            stage.children = []
	            var ct = 0;
	            var score = setInterval(function(){
	                p1score.width+=4
	                ct++
	                if(ct>19){
	                    clearInterval(score)
	                }
	            },20)
	            if(p1score.width<400){
	                setup()
	            } else{
	                p2score.width = 0
	                var c = 1
	                var win = setInterval(function(){
	                    p1score.height=Math.pow(c,2)+ct*4+20
	                    p1score.y = 700-(Math.pow(c,2)+ct*4+20)
	                    c+=0.7
	                    renderer.render(all)
	                    if(c>26){
	                        clearInterval(win)
	                        var words = "Player one wins!".split("")
	                        var piece = []
	                        function loop(){
	                            setTimeout(function(){
	                                loop()
	                                piece.push(words[0])
	                                words.shift()
	                                text.setText(piece.join(""))
	                                renderer.render(all)
	                            },50)
	                        }
	                        loop()
	                    }
	                },10)
	            }
	        }
	        else if(ball.y>renderer.height){
	            console.log("PLAYER TWO WINS")
	            stage.children = []
	            var ct = 0;
	            var score = setInterval(function(){
	                p2score.width+=4
	                ct++
	                if(ct>19){
	                    clearInterval(score)
	                }
	            },20)
	            if(p2score.width<400){
	                setup()
	            } else{
	                p1score.width = 0
	                var c = 1;
	                var win = setInterval(function(){
	                    p2score.height=Math.pow(c,2)+ct*4+20
	                    c+=0.7
	                    renderer.render(all)
	                    if(c>26){
	                        clearInterval(win)
	                        var words = "Player two wins!".split("")
	                        var piece = []
	                        function loop(){
	                            setTimeout(function(){
	                                loop()
	                                piece.push(words[0])
	                                words.shift()
	                                text.setText(piece.join(""))
	                                renderer.render(all)
	                            },50)
	                        }
	                        loop()
	                    }
	                },10)
	            }

	        } else{
	            requestAnimationFrame(animate);
	        }
	        // render the stage
	        key.check(39, function() {
	            paddle1.xvel += 1*ball.vel/5
	                //Right
	        })
	        key.check(37, function() {
	            paddle1.xvel -= 1*ball.vel/5
	                //Left
	        })
	        key.check(68, function() {
	            paddle2.xvel += 1*ball.vel/5
	                //Right
	        })
	        key.check(65, function() {
	            paddle2.xvel -= 1*ball.vel/5
	                //Right
	        })

	        paddle1.x+=paddle1.xvel
	        paddle1.xvel*=0.85-ball.vel*0.0001
	        paddle2.x+=paddle2.xvel
	        paddle2.xvel*=0.85-ball.vel*0.0001
	        move(ball,ball.vel,ball.direction+offset)
	        ball.vel+=0.005
	        contain(paddle1,renderer.width,renderer.height,function(handle){
	            handle("l",function(){
	                paddle1.x = 0
	                paddle1.xvel *= -0.6
	            })
	            handle("r",function(){
	                paddle1.x = renderer.width-paddle1.width
	                paddle1.xvel *= -0.6
	            })
	        })
	        contain(paddle2,renderer.width,renderer.height,function(handle){
	            handle("l",function(){
	                paddle2.x = 0
	                paddle2.xvel *= -1
	            })
	            handle("r",function(){
	                paddle2.x = renderer.width-paddle2.width
	                paddle2.xvel *= -1
	            })
	        })
	        contain(ball,renderer.width,renderer.height,function(handle){
	            handle("l",function(){
	                ball.direction = (180-ball.direction)%360
	                ball.x+=ball.vel
	                ball.facing = 1
	            })
	            handle("r",function(){
	                ball.direction = (180-ball.direction)%360
	                ball.x-= ball.vel
	                ball.facing = -1
	            })
	        })
	        collide(ball,paddle1,function(handle){
	            handle("y",function(){
	                console.log("up")
	                offset = 0
	                ball.direction += (360-(180-2*ball.direction))%360
	                ball.y = 655
	            })

	        })
	        collide(ball,paddle2,function(handle){
	            handle("y",function(){
	                console.log("down")
	                offset = 0
	                ball.direction += (360-(180-2*ball.direction))%360
	                ball.y = 30
	            })

	        })
	        renderer.render(all);
	    }

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
	    if(sprite.position.x+sprite.width > width){
	        exit.push("r")
	    }
	    if (sprite.position.y-sprite.width/2 < 0) {
	        exit.push("u")
	    }
	    if(sprite.position.y+sprite.width/2 > height){
	        exit.push("d")
	    }
	    function handle(code,cb){
	        if(exit.indexOf(code)!=-1){
	            cb()
	        }
	    }
	    callback(handle)
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(object, distance,direction) {
		object.x = object.x + distance * Math.cos((direction*Math.PI)/180);
		object.y = object.y + distance * Math.sin((direction*Math.PI)/180);
	}


/***/ }
/******/ ]);
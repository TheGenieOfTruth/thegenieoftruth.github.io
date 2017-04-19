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

	var key = __webpack_require__(1);
	var particles = __webpack_require__(2);
	var debug = __webpack_require__(4);
	var collide = __webpack_require__(5);
	key.listen();
	var width = 650;
	var height = 500;
	var aspect = width / height;

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);

	var light = new THREE.PointLight(0xffffff, 1);

	light.castShadow = true;

	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;

	light.shadow.camera.near = 500;
	light.shadow.camera.far = 4000;
	light.shadow.camera.fov = 30;
	light.position.y = 1;
	light.position.z = 2;
	light.rotation.x = -0.01;
	camera.add(light);
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	renderer.setClearColor(0x2c3e50);
	document.body.appendChild(renderer.domElement);
	document.body.appendChild(document.createElement("br"));
	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	var geometry = new THREE.CubeGeometry(1, 1, 1);
	var material = new THREE.MeshStandardMaterial({
	    color: 0x2ecc71
	});

	var cube = new THREE.Mesh(geometry, material);
	cube.position.y = -2;
	scene.add(cube);
	scene.add(camera);

	material = new THREE.MeshStandardMaterial({
	    color: 0x888888
	});
	camera.position.z = 4;
	camera.position.y = -1;
	var oC = new THREE.Mesh(geometry, material);
	scene.add(oC);
	oC.position.z = -6;
	oC.position.x = 2;
	(function () {
	    var a = new THREE.CubeGeometry(10, 1, 50);

	    var c = new THREE.Mesh(a, material);
	    scene.add(c);
	    c.position.y = -3;
	    c.position.z = -24;
	})();
	(function () {
	    var a = new THREE.CubeGeometry(10, 1, 50);

	    var c = new THREE.Mesh(a, material);
	    scene.add(c);
	    c.position.y = 6;
	    c.position.z = -24;
	})();
	(function () {
	    var a = new THREE.CubeGeometry(1, 10, 50);
	    var c = new THREE.Mesh(a, material);
	    c.position.x = 5.5;
	    c.position.y = 1.5;
	    c.position.z = -24;
	    scene.add(c);
	})();
	(function () {
	    var a = new THREE.CubeGeometry(1, 10, 50);
	    var c = new THREE.Mesh(a, material);
	    c.position.x = -5.5;
	    c.position.y = 1.5;
	    c.position.z = -24;
	    scene.add(c);
	})();
	cube.zvel = 0;
	cube.yvel = 0;
	cube.xvel = 0;
	function render() {

	    /*
	    ===========================
	    |  Normal Control Scheme  |
	    ===========================
	    Garden variety controls,
	    "For all of your controlling needs!"
	    
	    | Dependencies: 1
	        * tools/key-press.js
	    | Requirements: 2
	        * key.listen() to initialise
	        * run in a loop
	    
	    */
	    key.check([65, 37], function () {
	        cube.xvel -= 0.05;
	        //Left
	    });
	    key.check([68, 39], function () {
	        cube.xvel += 0.05;
	        //Right
	    });
	    key.check([87, 38], function () {
	        cube.zvel -= 0.05;
	        //Up
	    });
	    key.check([40, 83], function () {
	        cube.zvel += 0.05;
	        //Down
	    });
	    key.check([32], function () {
	        particles.run(cube, scene);
	        cube.yvel += 0.005;
	        //Rockets
	    }, function () {
	        if (!(cube.position.y <= -2)) cube.yvel -= 0.01;
	    });
	    key.check(80, function () {

	        //Pause
	    });
	    cube.xvel *= 0.7;
	    cube.zvel *= 0.7;
	    //Floor
	    if (cube.position.y + cube.yvel - 0.001 < -2) {
	        if (Math.abs(cube.yvel) < 0.01) {
	            cube.yvel = 0;
	        }
	        cube.yvel *= -0.4;
	        cube.position.y = -2;
	    }
	    //Ceiling
	    if (cube.position.y > 5) {
	        if (Math.abs(cube.yvel) < 0.01) {
	            cube.yvel = 0;
	        }
	        cube.yvel *= -0.4;
	        cube.position.y = 5;
	    }
	    //Left wall
	    if (cube.position.x + cube.xvel < -4.5) {
	        if (Math.abs(cube.xvel) < 0.01) {
	            cube.xvel = 0;
	        }
	        cube.xvel *= -0.4;
	        cube.position.x = -4.5;
	    }
	    //Right wall
	    if (cube.position.x + cube.xvel > 4.5) {
	        if (Math.abs(cube.xvel) < 0.01) {
	            cube.xvel = 0;
	        }
	        cube.xvel *= -0.4;
	        cube.position.x = 4.5;
	    }
	    //Camera side
	    if (cube.position.z + cube.zvel + 0.001 > 0) {
	        if (Math.abs(cube.zvel) < 0.01) {
	            cube.zvel = 0;
	        }
	        cube.zvel *= -0.4;
	        cube.position.z = 0;
	    }
	    //Far side
	    if (cube.position.z + cube.zvel + 0.001 < -49) {
	        cube.zvel = 14;
	    }

	    cube.position.x += cube.xvel;
	    cube.position.z += cube.zvel;
	    cube.position.y += cube.yvel;
	    debug("stoof", JSON.stringify(cube.geometry.parameters));
	    debug("z", cube.position.z);
	    debug("x", cube.position.x);
	    debug("y", cube.position.y);
	    debug("zvel", cube.zvel);
	    debug("xvel", cube.xvel);
	    debug("yvel", cube.yvel);
	    debug("Collision", collide(cube, oC));
	    particles.loop(scene);
	    renderer.render(scene, camera);
	    if (!collide(cube, oC)) {
	        requestAnimationFrame(render);
	    }
	}
	render();

/***/ },
/* 1 */
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = new function () {
		var move = __webpack_require__(3);
		this.particles = [];
		var a = this;
		this.run = function (obj, scene) {
			var geometry = new THREE.CubeGeometry(0.1, 0.1, 0.1);
			var material = new THREE.MeshStandardMaterial({
				color: [0xe74c3c, 0xe67e22, 0xf1c40f][Math.floor(Math.random() * 2)],
				transparent: true
			});
			var cube = new THREE.Mesh(geometry, material);
			move(cube).to(obj);
			cube.yvel = 0;
			cube.position.y -= 0.1;
			this.particles.push(cube);
			scene.add(cube);
			move(cube).to(obj);
		};
		this.loop = function (scene) {
			this.particles.forEach(function (particle) {
				particle.material.opacity -= 0.01;
				move(particle).randomly([[-0.1, 0.1], [0, 0], [-0.1, 0.1]]).gravity(0.01);
				if (particle.material.opacity <= 0) {
					scene.remove(particle);
					a.particles.splice(a.particles.indexOf(particle), 1);
				}
			});
		};
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function (obj) {
		function a(min, max) {
			return Math.random() * (max - min) + min;
		}
		var func = {
			"obj": obj,
			"to": function to(obj2) {
				obj.position.x = obj2.position.x;
				obj.position.y = obj2.position.y;
				obj.position.z = obj2.position.z;
				obj.xvel = obj2.xvel;
				obj.yvel = obj2.yvel;
				obj.zvel = obj2.zvel;
				return func;
			},
			"randomly": function randomly(arr) {
				obj.position.x += a(arr[0][0], arr[0][1]);
				obj.position.y += a(arr[1][0], arr[1][1]);
				obj.position.z += a(arr[2][0], arr[2][1]);
				return func;
			},
			"gravity": function gravity(str) {
				obj.yvel -= str;
				obj.position.y += obj.yvel;
				return func;
			}
		};
		return func;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function (idMessage, value) {
	    if (document.getElementById(idMessage) == null) {
	        var elem = document.createElement("dbg");
	        elem.innerHTML = idMessage + ": <label id = '" + idMessage + "'>" + value + "</label><br>";
	        document.getElementsByTagName("body")[0].appendChild(elem);
	        return;
	    }
	    document.getElementById(idMessage).innerHTML = value;
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function (r1, r2) {
	    if (r1.invincible === true || r2.invincible === true) {
	        return false;
	    }
	    //Define the variables we'll need to calculate
	    var hit, combinedHalfWidths, combinedHalfHeights, combinedHalfDepths, vx, vy, vz;
	    //hit will determine whether there's a collision
	    hit = false;
	    //Find the center points of each sprite
	    r1.centerX = r1.position.x + r1.geometry.parameters.width / 2;
	    r1.centerY = r1.position.y + r1.geometry.parameters.height / 2;
	    r1.centerZ = r1.position.z + r1.geometry.parameters.depth / 2;
	    r2.centerX = r2.position.x + r2.geometry.parameters.width / 2;
	    r2.centerY = r2.position.y + r2.geometry.parameters.height / 2;
	    r2.centerZ = r2.position.z + r2.geometry.parameters.depth / 2;
	    //Find the half-widths and half-heights of each sprite
	    r1.halfWidth = r1.geometry.parameters.width / 2;
	    r1.halfHeight = r1.geometry.parameters.height / 2;
	    r1.halfDepth = r1.geometry.parameters.depth / 2;
	    // lol ur mom is so r1.halfWidth * 10
	    r2.halfWidth = r2.geometry.parameters.width / 2;
	    r2.halfHeight = r2.geometry.parameters.height / 2;
	    r2.halfDepth = r2.geometry.parameters.depth / 2;
	    //Calculate the distance vector between the sprites
	    vx = r1.centerX - r2.centerX;
	    vy = r1.centerY - r2.centerY;
	    vz = r1.centerZ - r2.centerZ;
	    //Figure out the combined half-widths and half-heights
	    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
	    combinedHalfHeights = r1.halfHeight + r2.halfHeight;
	    combinedHalfDepths = r1.halfDepth + r2.halfDepth;
	    //Check for a collision on the x axis
	    if (Math.abs(vx) < combinedHalfWidths) {
	        //A collision might be occuring. Check for a collision on the y axis
	        if (Math.abs(vy) < combinedHalfHeights) {
	            if (Math.abs(vz) < combinedHalfDepths) {
	                return true;
	            }
	        }
	    }
	    return false;
	};

/***/ }
/******/ ]);
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

	var key = __webpack_require__(1)
	// create an new instance of a pixi stage
		var stage = new PIXI.Stage();
	    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
		// create a renderer instance.
		var renderer = PIXI.autoDetectRenderer(400, 300);
	    renderer.backgroundColor = 0x1099bb
		// add the renderer view element to the DOM
		document.body.appendChild(renderer.view);

		requestAnimationFrame( animate );
		// create a new Sprite using the texture
		var cat = new PIXI.Sprite(PIXI.Texture.fromImage("assets/cat.png"));

		// center the sprites anchor point
		cat.anchor.x = 0.5;
		cat.anchor.y = 0.5;
	    cat.scale.x = 5;
	    cat.scale.y = 5;
		// move the sprite t the center of the screen
		cat.position.x = 100;
		cat.position.y = 150;

		stage.addChild(cat);
	    var x = 0
		function animate() {
	        x+=0.01
		    requestAnimationFrame( animate );
		    // render the stage
	        cat.y = 150+Math.sin(x)*50
					cat.x += Math.sin(x)
		    renderer.render(stage);
		}


/***/ },
/* 1 */
/***/ function(module, exports) {

	

/***/ }
/******/ ]);
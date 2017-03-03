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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "\n// create an new instance of a pixi stage\n\tvar stage = new PIXI.Stage();\n    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;\n\t// create a renderer instance.\n\tvar renderer = PIXI.autoDetectRenderer(400, 300);\n    renderer.backgroundColor = 0x1099bb\n\t// add the renderer view element to the DOM\n\tdocument.body.appendChild(renderer.view);\n\n\trequestAnimationFrame( animate );\n\t// create a new Sprite using the texture\n\tvar cat = new PIXI.Sprite(PIXI.Texture.fromImage(\"assets/cat.png\"));\n\n\t// center the sprites anchor point\n\tcat.anchor.x = 0.5;\n\tcat.anchor.y = 0.5;\n    cat.scale.x = 5;\n    cat.scale.y = 5;\n\t// move the sprite t the center of the screen\n\tcat.position.x = 200;\n\tcat.position.y = 150;\n\n\tstage.addChild(cat);\n    var x = 0\n\tfunction animate() {\n        x+=0.01\n\t    requestAnimationFrame( animate );\n\t    // render the stage\n        cat.y = 150+Math.sin(x)*50\n\t\t\t\tcat.x += 1\n\t    renderer.render(stage);\n\t}\n"

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(0))

/***/ })
/******/ ]);
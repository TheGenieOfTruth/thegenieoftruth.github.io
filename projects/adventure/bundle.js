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
/***/ function(module, exports) {

	var obj = { "text": "You find yourself in a place, and you think about doing a thing", "link": [{ "text": "%%opt This is a option%% \nYou realize that this option was probably an option 0.8177255025008481", "link": [] }, { "text": "%%opt This is an option%% \nYou realize that this option was probably an option 0.4713419905367273", "link": [] }, { "text": "%%opt This is an%% \nYou realize that this option was probably an option 0.6899407288965576", "link": [] }] };
	function map(a) {
		a.link.forEach(function (val) {
			var code = /%%((?!%).)*%%/g;
			var fixed = val.text.replace(/%%((?!%).)*%%/g, "");
			var matches = val.text.match(code);
			matches.forEach(function (match) {
				console.log(match);
				if (match.substring(0, 5) == "%%opt") {
					console.log("Choice verified as: " + match.substring(6, match.length - 2));
					val.opt = match.substring(6, match.length - 2);
				}
			});
		});
	}
	map(obj);
	function render(a) {
		$("#container").html("");
		$("#container").append($("<p>" + a.text + "</p>"));
		a.link.forEach(function (val, i) {
			if (val.opt != undefined) {
				$("#container").append($("<button id = " + i + ">" + val.opt + "</button>"));
				$("#" + i).click(function () {
					if (val.link.length > 0) {
						render(val.link);
					} else {
						$("#container").html("gg");
					}
				});
			}
		});
	}
	render(obj);

/***/ }
/******/ ]);
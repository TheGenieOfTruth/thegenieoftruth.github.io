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

	var resize = __webpack_require__(1);
	var clip = __webpack_require__(2);
	function grp() {
		$(".icon-group").prepend($("\n    <div class = \"toolbar\">\n\t</div>\n\t<div class = \"menu\">\n\t\t<div class = \"icon-4\" data-toggle=\"tooltip\" title=\"Duplicate this choice and connected items\">\n\t\t\t<i class=\"fa fa-clone fa\" aria-hidden=\"true\"></i>\n\t\t</div\n\t\t><div class = \"icon-3\" data-toggle=\"tooltip\" title=\"Remove this choice and connected items\">\n\t\t\t<i class=\"fa fa-times fa\" aria-hidden=\"true\"></i>\n\t\t</div\n\t\t><div class = \"icon-2\" data-toggle=\"tooltip\" title=\"Add new choice on same level\">\n\t\t\t<i class=\"fa fa-plus fa\" aria-hidden=\"true\"></i>\n\t\t</div\n\t\t><div class = \"icon-1\" data-toggle=\"tooltip\" title=\"Add new choice on next level\" data-placement=\"left\">\n\t\t\t<i class=\"fa fa-indent fa\" aria-hidden=\"true\"></i>\n\t\t</div>\n\t\t\n\t</div>\n\t"));
		$(".icon-group").removeClass("icon-group").addClass("ig");
	}
	grp();
	$(".icon-group-start").prepend($("\n\t<div class = \"toolbar\">\n\t</div>\n\t<div class = \"menu\">\n\t\t<div class = \"icon-1\" data-toggle=\"tooltip\" title=\"Add new choice on next level\" data-placement=\"left\">\n\t\t\t<i class=\"fa fa-indent fa\" aria-hidden=\"true\"></i>\n\t\t</div>\n\t\t\n\t</div>\n\t"));
	$(".icon-group-start").removeClass("icon-group-start").addClass("ig");

	function iconF() {
		grp();
		i1();
		i2();
		i3();
		i4();
		resize();
		$('[data-toggle="tooltip"]').tooltip();
	}

	function i1() {
		$(".icon-1").unbind('click').click(function () {
			$("<div class = \"group\"><br><div class = \"icon-group\"><div contenteditable = \"plaintext-only\" class = \"form-control\">%%opt This is an option%% \nYou realize that this option was probably an option " + Math.random() + "</textarea></div></div>\n\t").insertAfter($(this).parent().parent());
			iconF();
		});
	}

	function i2() {
		$(".icon-2").unbind('click').click(function () {
			$("<div class = \"group\"><br><div class = \"icon-group\"><div contenteditable = \"plaintext-only\" class = \"form-control\">%%opt This is an option%% \nYou realize that this option was probably an option " + Math.random() + "</textarea></div></div>\n\t").insertAfter($(this).parent().parent().parent());
			iconF();
		});
	}

	function i3() {
		$(".icon-3").unbind('click').click(function () {
			$(this).parent().parent().parent().remove();
			$(".tooltip").remove();
		});
	}

	function i4() {
		$(".icon-4").unbind('click').click(function () {
			var elem = $(this).parent().parent().parent().clone();
			$(elem).insertAfter($(this).parent().parent().parent());
			iconF();
		});
	}

	$("#export").click(function () {
		function explore(elem, map) {
			elem.children(".group").each(function (index, value) {
				var clone = jQuery.extend([], map);
				clone[clone.length] = index;
				var txt = { "text": $(value).children().children(".form-control").html(), "link": [] };
				var x = "";
				for (i = 0; i < clone.length; i++) {
					x += ".link." + clone[i];
				}
				if (x === "") {
					obj = txt;
				} else {
					x = x.substring(1, x.length);
					set(x, txt);
				}
				explore($(value), clone);
			});
		}
		function set(path, value) {
			var schema = obj; // a moving reference to internal objects within obj
			var pList = path.split('.');
			var len = pList.length;
			for (var i = 0; i < len - 1; i++) {
				var elem = pList[i];
				if (!schema[elem]) schema[elem] = {};
				schema = schema[elem];
			}

			schema[pList[len - 1]] = value;
		}
		var obj = {};
		explore($("#content"), []);
		obj = JSON.stringify(obj.link["0"]);
		$('#clip').modal();
		clip(obj);
	});
	iconF();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function () {
	    var observe;
	    if (window.attachEvent) {
	        observe = function observe(element, event, handler) {
	            element.attachEvent('on' + event, handler);
	        };
	    } else {
	        observe = function observe(element, event, handler) {
	            element.addEventListener(event, handler, false);
	        };
	    }
	    function init() {
	        var text = document.querySelectorAll("textarea");
	        text.forEach(function (text) {
	            function resize() {
	                text.style.height = 'auto';
	                text.style.height = text.scrollHeight + 'px';
	            }
	            /* 0-timeout to get the already changed text */
	            function delayedResize() {
	                window.setTimeout(resize, 0);
	            }
	            observe(text, 'change', resize);
	            observe(text, 'cut', delayedResize);
	            observe(text, 'paste', delayedResize);
	            observe(text, 'drop', delayedResize);
	            observe(text, 'keydown', delayedResize);

	            text.focus();
	            text.select();
	            resize();
	        });
	    }
	    init();
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function (text) {
	  var textArea = document.createElement("textarea");

	  //
	  // *** This styling is an extra step which is likely not required. ***
	  //
	  // Why is it here? To ensure:
	  // 1. the element is able to have focus and selection.
	  // 2. if element was to flash render it has minimal visual impact.
	  // 3. less flakyness with selection and copying which **might** occur if
	  //    the textarea element is not visible.
	  //
	  // The likelihood is the element won't even render, not even a flash,
	  // so some of these are just precautions. However in IE the element
	  // is visible whilst the popup box asking the user for permission for
	  // the web page to copy to the clipboard.
	  //

	  // Place in top-left corner of screen regardless of scroll position.
	  textArea.style.position = 'fixed';
	  textArea.style.top = 0;
	  textArea.style.left = 0;

	  // Ensure it has a small width and height. Setting to 1px / 1em
	  // doesn't work as this gives a negative w/h on some browsers.
	  textArea.style.width = '2em';
	  textArea.style.height = '2em';

	  // We don't need padding, reducing the size if it does flash render.
	  textArea.style.padding = 0;

	  // Clean up any borders.
	  textArea.style.border = 'none';
	  textArea.style.outline = 'none';
	  textArea.style.boxShadow = 'none';

	  // Avoid flash of white box if rendered for any reason.
	  textArea.style.background = 'transparent';

	  textArea.value = text;

	  document.body.appendChild(textArea);

	  textArea.select();

	  try {
	    var successful = document.execCommand('copy');
	    var msg = successful ? 'successful' : 'unsuccessful';
	  } catch (err) {
	    console.error('Browser does not support copy command');
	  }

	  document.body.removeChild(textArea);
	};

/***/ }
/******/ ]);
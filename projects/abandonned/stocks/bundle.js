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

	function get(symbol, duration, callback) {
	        //Make JSON request for timeseries data
	        $.ajax({
	            url: "https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?ticker=FB&qopts.columns=date,open&api_key=wyx74BcKEtBGjmfz6VXP",
	            dataType: "json",
	            success: callback
	        })
	}
	get("GOOG",5,function(data){
	    console.log(data)
	})
	/* function displayStock(ticker, duration) {
	    get(ticker, duration, function(data) {
	    var prices = data.Elements[0].DataSeries.close.values;
	    var tot=0;
	    for (var i=0;i<prices.length;i++) {
	        tot += prices[i];
	    }
	    var avg = tot/prices.length;
	    $("body").append("<p>" + ticker + " "+ prices[prices.length -1].toString() + " " + (Math.round(avg*100) / 100).toString() + "</p>")
	    })
	}
	displayStock("GOOG", 5);
	displayStock("NVDA", 5);
	displayStock("AAPL", 5);
	displayStock("BABA", 5);
	displayStock("AMZN", 5);
	displayStock("IRBT", 5);
	displayStock("INTC", 5);
	displayStock("GE", 5);
	displayStock("PG", 5);
	displayStock("FTR", 5); */

/***/ }
/******/ ]);
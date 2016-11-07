/*
master.js
Welcome to the master file.
This is a file that EVERY HTML project with a config file links to.
All HTML projecs will run this, so be careful; If there are glitches every project will break!

*/
console.log("master.js loaded")
    // JQuery bootstrap geniescript idlekit theme
var randomTheme = 0
var autogrowPlus = 0
var autogrow = 0
var jquery = 0
var bootstrap = 0
var geniescript = 0
var idlekit = 0
var theme = 0
var essentials = 0
var three = 0
var firebase = 0
var mousetrap = 0
var valid = ["cerulean", "cosmo", "cyborg", "darkly", "flatly", "journal",
    "lumen", "paper", "readable", "sandstone", "simplex", "slate",
    "spacelab", "superhero", "united", "yeti"
]
var temp = 0
for (i = 0; i < valid.length; i++) {
    if (theme === valid[i]) {
        temp = 1
    }
}
if (!temp) {
    theme = 0
}
function rand(array){
	return array[Math.round(Math.random()*(array.length-1))]
}
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

function jslib(src,basic,done) {
	if(done===undefined){done = function(){}}
    if(basic){
		rend(src)
        var ss = document.createElement("script");
        ss.src = src;
        ss.type = "text/javascript";
		ss.onreadystatechange = ss.onload = done
        document.getElementsByTagName("head")[0].appendChild(ss);
    }
else{
	rend2(full+src+".js")
    var ss = document.createElement("script");
    ss.src = full + src + ".js";
    ss.type = "text/javascript";
	ss.onreadystatechange = ss.onload = done
    document.getElementsByTagName("head")[0].appendChild(ss);
}
}

function csslib(href,basic) {
    if(basic){
		rend(href)
        var ss = document.createElement("link");
        ss.href = href
        ss.rel = "stylesheet"
        ss.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(ss);
    }
    else{
		rend2(full+href+".css")
    var ss = document.createElement("link");
    ss.href = full + href + ".css";
    ss.rel = "stylesheet"
    ss.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(ss);
}
}
console.log("List of libraries this program uses: ")
var arr79 = []
var arr78 = []
function rend(filename){
	console.log(filename)
	arr79[arr79.length]=filename.replace(/%20/g," ")
}
function rend2(filename){
	console.log(filename.split("/")[filename.split("/").length-1])
	arr78[arr78.length] = filename.replace(/%20/g," ")
	arr79[arr79.length]=filename.split("/")[filename.split("/").length-1].replace(/%20/g," ")
}
function get(libname) {
    libname = libname.toLowerCase()
    switch (libname) {
        case 'essentials':
            essentials = 1
            break;
        case 'jquery':
            jquery = 1
            break;
        case 'bootstrap':
            bootstrap = 1
			rend("bootstrap.min.js")
            break;
        case 'geniescript':
            geniescript = 1
            break;
        case 'idlekit':
            idlekit = 1
			rend("idlekit.js")
            break;
        case 'autogrowplus':
          autogrowPlus = 1
          break;
		case 'theme-random':
		  randomTheme = 1
		  break;
		  case 'firebase':
		  firebase = 1
		  break;
		  case 'mousetrap':
		  mousetrap = 1
		  break;
        case 'autogrow':
            autogrow = 1
            break;
		case 'three':
			three = 1
        default:
            if (libname.substring(0, 6) === "theme-") {
                theme = libname.substring(6, libname.length)
            }

    }
}
function finish(){
    var arr = location.pathname.split("/")
    var directoryName = arr
    full = ""
    var lngth = directoryName.length
    for (i = 0; i < lngth; i++) {
        full += directoryName[i] + "/"
        if (directoryName[i] === "HTML%20Development") {
            i = lngth
        }
    }
	/*
	Tiers:
	JQuery >
		Bootstrap
		Autogrow
		Autogrowplus
	AFTER: main
	*/
	var fin = ""
	var end = ""
    full = full + "libraries/"
    if (jquery || bootstrap || essentials) {
        fin+='jslib("jquery.min",false,function(){'
		end+='})'
    }
    if (bootstrap || essentials) {
		fin+='jslib("bootstrap.min");'
        csslib("bootstrap.min")

    }
    if (geniescript) {
        jslib("geniescript")
    }
    if (idlekit) {
        jslib("idlekit")
    }
	if(three){
		jslib("three.min")
	}
	if(mousetrap){
		jslib("mousetrap")
	}
	if(firebase){
		jslib("firebase")
	}
    if(autogrow){
        fin+='jslib("autogrow.min");'
    }
    if(autogrowPlus){
        fin+='jslib("autogrowplus.min");'
    }
    if (isNaN(theme)) {
        csslib("themes/" + theme)
    } else if (essentials) {
        csslib("themes/flatly")
    } else if(randomTheme){
		csslib("themes/" + rand(valid))
	}
	fin+='jslib("main.js",true,function(){ref79 = Object();ref79.libraries = arr78;ref79.raw = arr79;ref79.path = window.location.pathname.replace(/%20/g," ");ref79 = JSON.stringify(ref79);console.log("Use the variable ref79 to get info of this project")})'
	 csslib("stylesheet.css",true)
	eval(fin+end)
	//Finally, now that all of the projects and such are loaded, get rid of every function and variable created
	randomTheme = null
	autogrowPlus = null
	autogrow = null
	jquery = null
	bootstrap = null
	geniescript = null
	idlekit = null
	theme = null
	essentials = null
	valid = null
	temp = null
}

function makeText(text,delay,id,timeout){
setTimeout(function(){
var chars = text.split('');
printLoop(chars,id,delay,0)
},timeout)
}
//Part of making text
function printLoop(chars,id,delay,no){
if(no<chars.length){
document.getElementById(id).innerHTML = document.getElementById(id).innerHTML+chars[no]
setTimeout(function(){printLoop(chars,id,delay,no+1)
},delay)}}
function saveCookie(cname, cvalue) {
    exdays = 100
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function loadCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
function saveLocal(e,t){localStorage.setItem(e,t)}function loadLocal(e){return localStorage.getItem(e)}
function all(array){
var data = ""
for(i=0;i<array.length;i++){
data=data+array[i]
}
return data
}
function scramble(phrase){
var currentno = 0
var hold1 = phrase
phrase=phrase.toUpperCase()
var words = phrase.split(" ")
var letters = all(words).split("")
var length = letters.length
var scrambled = ""
var rand = Math.floor(Math.random()*letters.length)
for(i=0;i<hold1.length-1;i++){
scrambled = scrambled+letters[rand]
letters.splice(rand,1)
rand = Math.floor(Math.random()*letters.length)
}
if(all(all(words).split(""))==scrambled){
usable=true
scramble(phrase)
return "ERROR... Rescrambling"
}
return scrambled
}
function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
        x *= Math.pow(10,e-1);
        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x += (new Array(e+1)).join('0');
    }
  }
  return x;
}
        function abbN(number) {
        var special = false
        if(number<0){number=Math.abs(number);special=true}
    decPlaces = Math.pow(10,3);

    // Enumerate number abbreviations
    var abbrev = [ "k", "mil", "bil","tri", "qua","qui", "hex","sep","oct","non","dec","duodec","triodec","quadridec","quintidec","hexadec","septadec","octodec","nonodec"];

    // Go through the array backwards, so we do the largest first
    for (var i=abbrev.length-1; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);

        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             number = Math.round(number*decPlaces/size)/decPlaces;

             // Add the letter for the abbreviation
             number += abbrev[i];

             // We are done... stop
             break;
        }
    }
if(special){return "-"+number}
    else{return number}
}
function fix(x){return abbN(toFixed(x))}
/*
--GENIESCRIPT CONTENTS--
makeText(text,delay,id,timeout). This writes text at a certain speed based on what you enter. In text put a string, in delay put a delay for how fast characters are typed, an id for the text to written in, and a timeout for waiting until the text is written. Eg: makeText("Hello, word!",100,"demo",0)
save(cname, cvalue). Saves a cookie with a certain value under a name. Load can be used to load this cookie. Eg: save("importantdata",124623)
load(cname). Loads a cookie that already exists. Eg: load("important data")
all(array). Returns all arrays/data inside of an array. It will be returned as one big string. all(["potato","rainbow"])
scramble(phrase). Scrambles text. Not sure why you'd want this, but hey... Eg: scramble("YO!")
toFixed(x). Converts numbers to long numbers. Eg: toFixed(5e+41)
abbN(number). Abbreviates numbers as strings. Eg: abbN(50329)
fix(x). Fixes numbers then abbreviates them. Eg: fix(5e+36) */
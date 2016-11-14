//Hacktimer, makes it so the bot laggs you, even when you don't have the tab focused :O
(function(s){var w,f={},o=window,l=console,m=Math,z='postMessage',x='HackTimer.js by turuslan: ',v='Initialisation failed',p=0,r='hasOwnProperty',y=[].slice,b=o.Worker;function d(){do{p=0x7FFFFFFF>p?p+1:0}while(f[r](p));return p}if(!/MSIE 10/i.test(navigator.userAgent)){try{s=o.URL.createObjectURL(new Blob(["var f={},p=postMessage,r='hasOwnProperty';onmessage=function(e){var d=e.data,i=d.i,t=d[r]('t')?d.t:0;switch(d.n){case'a':f[i]=setInterval(function(){p(i)},t);break;case'b':if(f[r](i)){clearInterval(f[i]);delete f[i]}break;case'c':f[i]=setTimeout(function(){p(i);if(f[r](i))delete f[i]},t);break;case'd':if(f[r](i)){clearTimeout(f[i]);delete f[i]}break}}"]))}catch(e){}}if(typeof(b)!=='undefined'){try{w=new b(s);o.setInterval=function(c,t){var i=d();f[i]={c:c,p:y.call(arguments,2)};w[z]({n:'a',i:i,t:t});return i};o.clearInterval=function(i){if(f[r](i))delete f[i],w[z]({n:'b',i:i})};o.setTimeout=function(c,t){var i=d();f[i]={c:c,p:y.call(arguments,2),t:!0};w[z]({n:'c',i:i,t:t});return i};o.clearTimeout=function(i){if(f[r](i))delete f[i],w[z]({n:'d',i:i})};w.onmessage=function(e){var i=e.data,c,n;if(f[r](i)){n=f[i];c=n.c;if(n[r]('t'))delete f[i]}if(typeof(c)=='string')try{c=new Function(c)}catch(k){l.log(x+'Error parsing callback code string: ',k)}if(typeof(c)=='function')c.apply(o,n.p)};w.onerror=function(e){l.log(e)};l.log(x+'Initialisation succeeded')}catch(e){l.log(x+v);l.error(e)}}else l.log(x+v+' - HTML5 Web Worker is not supported')})('HackTimerWorker.min.js');
//Educates the stupid, and shows the seasoned an annoying message
console.log("Schoology bot loaded")
console.log("To use it, type:")
console.log("init(\"message here\")")
console.log("To stop the bot, type:")
console.log("halt()")
console.log("For more advanced features, type help()")
//Gives the docs
function help(){
    console.log("More advanced usage")
    console.log("init(message,delay,scrambled,endLetter)")
    console.log("Message should be a string, written as \"message here\". Default: \"hello this is a message\"")
    console.log("Delay should be a number. This is how long it will be before the bot tries to send a comment. Default: 2500")
    console.log("Scrambled should be a boolean (true or false). This will rearrange the words if true. Default: true")
    console.log("endLetter should be a string, written as \"end letter\". This is put at the end of the message. Default: \"!\"")
}
//Clicks an element
function clickify(targetNode){
if (targetNode) {
triggerMouseEvent (targetNode, "mouseover");
triggerMouseEvent (targetNode, "mousedown");
triggerMouseEvent (targetNode, "mouseup");
triggerMouseEvent (targetNode, "click");
}
else{
console.log ("*** Target node not found!");
}}
//Triggers mouse events, nuff said
function triggerMouseEvent (node, eventType) {
var clickEvent = document.createEvent ('MouseEvents');
clickEvent.initEvent (eventType, true, true);
node.dispatchEvent (clickEvent);
}
//Stops the loop of requests
function halt(){
    clearInterval(loop)
}
function init(/*message,delay,scrambled,endLetter*/){
//Saves some space. Pretty nice, checks if something doesn't exist
function fallback(arg,def){
    if(arg==undefined){
        return def
    }
    return arg
}
//All the different flavors of arguments, and their fallbacks
if(typeof arguments[0] === "object"){
    var message = fallback(arguments[0]["message"],"hello this is a message")
    var delay = fallback(arguments[0]["delay"],100)
    var scrambled = fallback(arguments[0]["scrambled"],true)
    var endLetter = fallback(arguments[0]["endLetter"],"!")
} else{
var message = fallback(arguments[0],"hello this is a message")
var delay = fallback(arguments[1],100)
var scrambled = fallback(arguments[2],true)
var endLetter = fallback(arguments[3],"!")
}
loop = setInterval(function(){


var arr = message.split(" ")
if(scrambled){
//Shuffle. Probably stolen from the internet
function shuffle(array) {
var currentIndex = array.length, temporaryValue, randomIndex;

while (0 !== currentIndex) {
 randomIndex = Math.floor(Math.random() * currentIndex);
 currentIndex -= 1;
 temporaryValue = array[currentIndex];
 array[currentIndex] = array[randomIndex];
 array[randomIndex] = temporaryValue;
}

return array;
}
//Shuffle that array
arr = shuffle(arr)
//Grammerz!
arr[0] = arr[0].substring(0,1).toUpperCase()+ arr[0].substring(1,arr[0].length).toLowerCase()
}
//And what would we do without the ending letter?
arr = arr.join(" ")+endLetter
//Hoho, bypass that disabled button
document.getElementById("edit-submit").disabled  = false
//And make a beautiful comment
document.getElementById("edit-comment").value = arr
//Then press that submit button
clickify(document.getElementById("edit-submit"))
},delay)
}

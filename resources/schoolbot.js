console.log("Schoology bot loaded")
console.log("To use it, type:")
console.log("init(\"message here\")")
console.log("To stop the bot, type:")
console.log("halt()")
console.log("For more advanced features, type help()")
function help(){
    console.log("More advanced usage")
    console.log("init(message,delay,scrambled,endLetter)")
    console.log("Message should be a string, written as \"message here\". Default: \"hello this is a message\"")
    console.log("Delay should be a number. This is how long it will be before the bot tries to send a comment. Default: 2500")
    console.log("Scrambled should be a boolean (true or false). This will rearrange the words if true. Default: true")
    console.log("endLetter should be a string, written as \"end letter\". This is put at the end of the message. Default: \"!\"")
}
function clickify(targetNode){
if (targetNode) {
//--- Simulate a natural mouse-click sequence.
triggerMouseEvent (targetNode, "mouseover");
triggerMouseEvent (targetNode, "mousedown");
triggerMouseEvent (targetNode, "mouseup");
triggerMouseEvent (targetNode, "click");
}
else{
console.log ("*** Target node not found!");
}}
function triggerMouseEvent (node, eventType) {
var clickEvent = document.createEvent ('MouseEvents');
clickEvent.initEvent (eventType, true, true);
node.dispatchEvent (clickEvent);
}
function halt(){
    clearInterval(loop)
}
function init(){
function fallback(arg,def){
    if(arg==undefined){
        return def
    }
    return arg
}
var message = fallback(arguments[0],"hello this is a message")
var delay = fallback(arguments[1],2500)
var scrambled = fallback(arguments[2],true)
var endLetter = fallback(arguments[3],"!")
loop = setInterval(function(){


var arr = message.split(" ")
if(scrambled){
function shuffle(array) {
var currentIndex = array.length, temporaryValue, randomIndex;

// While there remain elements to shuffle...
while (0 !== currentIndex) {

 // Pick a remaining element...
 randomIndex = Math.floor(Math.random() * currentIndex);
 currentIndex -= 1;

 // And swap it with the current element.
 temporaryValue = array[currentIndex];
 array[currentIndex] = array[randomIndex];
 array[randomIndex] = temporaryValue;
}

return array;
}
arr = shuffle(arr)
arr[0] = arr[0].substring(0,1).toUpperCase()+ arr[0].substring(1,arr[0].length).toLowerCase()
arr[arr.length-1] = arr[arr.length-1]+endLetter
}
arr = arr.join(" ")

document.getElementById("edit-submit").disabled  = false
document.getElementById("edit-comment").value = arr
clickify(document.getElementById("edit-submit"))
},delay)
}

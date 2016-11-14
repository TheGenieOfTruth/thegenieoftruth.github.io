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
console.log("Ahoy there! Thanks for using the Schoology Bot.")
console.log("To use it, simply use this simple documentation:")
console.log("init(\"message here\")")
console.log("For more advanced features, type help()")
function fallback(arg,def){
    if(arg==undefined){
        return def
    }
    return arg
}
var message = fallback(arguments[0],"hello this is a message")
var delay = fallback(arguments[1],5000)
loop = setInterval(function(){


var arr = message.split(" ")
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
arr[arr.length-1] = arr[arr.length-1]+"!"
arr = arr.join(" ")

document.getElementById("edit-submit").disabled  = false
document.getElementById("edit-comment").value = arr
clickify(document.getElementById("edit-submit"))
},delay)
}}

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
var message = fallback(arguments[0],"hello this is a message")
var delay = fallback(arguments[1],2500)
var scrambled = fallback(arguments[2],true)
var endLetter = fallback(arguments[3],"!")
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

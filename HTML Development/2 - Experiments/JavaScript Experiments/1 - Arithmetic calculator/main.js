//Array for whitelisted keycodes
var whitelist = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/","(",")","."]
//Generate keycodes for 0-9
for(i=0;i<whitelist.length;i++){
	whitelist[i] = whitelist[i].charCodeAt(0)
}
//Evaluate the expression
function solve(){
	document.getElementById("num").value=eval(document.getElementById("num").value)
}
//Put another operator into the input box
function add(input){
	document.getElementById("num").value+=String(input)
}
//Handle the whitelist of keyCodes
function handleKeyPress(e){
	newValue = document.getElementById("num").value
	//Reset whitelisting check
	var whitelisted = false
	//Check whitelist if the keycode matches
	for(i=0;i<whitelist.length;i++){
		//If it matches, set whitelisted to true
		if(e.keyCode==whitelist[i]){
			whitelisted = true
		}
	}
	//If whitelisted handle input event correctly
	if(whitelisted){
		//Do nothing to change the letter because the letter is whitelisted
	}
	//If not, handle non input event correctly
    else{
		//Stop keypress event
		event.preventDefault()
	}
	//Confirmation keycodes (= and enter), (13,61)
	if(e.keyCode==13||e.keyCode==61){
		document.getElementById("num").value=eval(document.getElementById("num").value)
	}
} 
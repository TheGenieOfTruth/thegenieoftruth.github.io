var id = "content"
function toFixed(e){if(Math.abs(e)<1){var t=parseInt(e.toString().split("e-")[1]);t&&(e*=Math.pow(10,t-1),e="0."+new Array(t).join("0")+e.toString().substring(2))}else{var t=parseInt(e.toString().split("+")[1]);t>20&&(t-=20,e/=Math.pow(10,t),e+=new Array(t+1).join("0"))}return e}function abbN(e){var t=!1;0>e&&(e=Math.abs(e),t=!0),decPlaces=Math.pow(10,3);for(var a=["k","mil","bil","tri","qua","qui","hex","sep","oct","non","dec","duodec","triodec","quadridec","quintidec","hexadec","septadec","octodec","nonodec"],r=a.length-1;r>=0;r--){var n=Math.pow(10,3*(r+1));if(e>=n){e=Math.round(e*decPlaces/n)/decPlaces;e=e.toFixed(3);e+=a[r];break}}return t?"-"+e:e}function fix(e){return abbN(toFixed(e))}
var junk = {c1:-1}
function rate(name,base){
this.name = name
this.base = base
this.m1 = 1
this.m2 = 1
this.m3 = 1
this.properties = ["name","base","m1","m2","m3"]
this.val = eval('this.base*this.m1*this.m2*this.m3')
}
function save(e,t){localStorage.setItem(e,t)}function load(e){return localStorage.getItem(e)}
function idSet(text){
	console.log(text)
	id = text
}
function newResource(displayName,name,defSpeed){
eval(name + "rate = new rate(name,defSpeed)")
if(isNaN(defSpeed)){eval(name+"rate.base="+"0")}
document.getElementById(id).innerHTML = document.getElementById(id).innerHTML+"<p style = 'margin:0px'>"+displayName+": <span id = "+name+">"+"</span></p><p id = "+name+'speed'+" style = 'margin:0px;font-size:12px'>"+name+" ?/s"+"</p>"
eval(name+"="+"0")
if(load(name)==undefined){save(name,eval(name))}
else{eval(name + "=" + load(name))}
function eff(n){
	if(load(name+"rate."+n)==undefined){}
else{eval(name+"rate."+n + "=" + load(name+"rate."+n))}
}
eff("base");eff("m1");eff("m2");eff("m3")

setInterval(function(){
eval(name+"rate").val = eval(name+"rate").base*eval(name+"rate").m1*eval(name+"rate").m2*eval(name+"rate").m3
eval(name+"+="+eval(name+"rate").val/90);document.getElementById(name).innerHTML = fix(Math.floor(eval(name)));document.getElementById(name+"speed").innerHTML = "+"+fix(Math.floor(eval(name+"rate").val))+"/s";save(name,eval(name));
for(i=0;i<eval(name+"rate.properties.length");i++){
save(name+"rate."+eval(name+"rate.properties["+i+"]"),eval(name+"rate."+eval(name+"rate.properties["+i+"]")))
}
if(isNaN(defSpeed)){eval(name+"rate.base="+eval(defSpeed))}
},9)
if(load(name)==undefined){save(name,eval(name))}
else{eval(name + "=" + load(name))}
}
function newItem(){
	var displayName = arguments[0]
	var name = arguments[1]
	var codes = arguments[2]
	var extraround = arguments[3]
	if(arguments[2]!=undefined){
		var special = ";eval(name + '=' + codes)"
	}
	else{
		var special = ""
	}
	if(arguments[3]!=undefined){
		var special2 = "document.getElementById(name).innerHTML=fix((Math.round(eval(name)*"+Math.pow(10,arguments[3])+")/"+Math.pow(10,arguments[3])+").toFixed("+arguments[3]+"))"
	}
	else{
		var special2 = "document.getElementById(name).innerHTML=fix(Math.round(eval(name)));"
	}
	setTimeout(function(){
document.getElementById(id).innerHTML = document.getElementById(id).innerHTML+"<span id = "+name+'display'+" style = 'margin:0px'>"+displayName+": <span id = "+name+">"+"</span></span><br/>"
eval(name+"="+"0")
if(load(name)==undefined){save(name,eval(name))}
else{eval(name + "=" + load(name))}

	setInterval(function(){eval(special2);save(name,eval(name));eval(special)},10)},10)
	}
	function newUpgrade(displayName,name,titles,descriptions){
document.getElementById(id).innerHTML = document.getElementById(id).innerHTML+"<span id = "+name+'display'+" style = 'margin:0px'>"+displayName+": <span id = "+name+">"+"</span>"+"<p id = "+name+'lore'+" style = 'margin:0px;font-size:12px'></span><br/>"
eval(name+"="+"0")
if(load(name)==undefined){save(name,eval(name))}
else{eval(name + "=" + load(name));console.log("YAS")}
setInterval(function(){document.getElementById(name).innerHTML=titles[eval(name)];save(name,eval(name));document.getElementById(name+"lore").innerHTML = descriptions[eval(name)]},10)
	}
function newRecipe(displayName,recipe,benefits,id2){

	recipe = Array(recipe)
document.getElementById(id).innerHTML+="<button class = 'btn btn-success' id = '"+id2+"' onclick = ''>"+displayName+"</button>"
setTimeout(
function(){
document.getElementById(id2).onclick = function(){
var finals = "";var block = false;
for(i=0;i<recipe[0].length;i++){

if(eval(recipe[0][i][0])>=eval(recipe[0][i][1])){
finals+='eval(recipe[0]['+i+'][0]+"-="+recipe[0]['+i+'][1]);'
}
else{block=true}
}
if(!block){
	
eval(finals)
eval(benefits)}
	

}},5)}
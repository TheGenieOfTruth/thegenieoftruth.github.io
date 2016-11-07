function makeText(text,delay,id,timeout,done){

setTimeout(function(){
var chars = text.split('');
printLoop(chars,id,delay,0,done)
},timeout)
}
function printLoop(chars,id,delay,no,done){
if(no<chars.length){
if(chars[no]==">"){
	chars[no] = "'"
}
if(chars[no]=="<"){
	chars[no] = '"'
}
if(chars[no]==" "){
	document.getElementById(id).innerHTML = document.getElementById(id).innerHTML+chars[no]
	printLoop(chars,id,delay,no+1,done)
}
else{
document.getElementById(id).innerHTML = document.getElementById(id).innerHTML+chars[no]
setTimeout(function(){printLoop(chars,id,delay,no+1,done)
},delay)}}
else{
	done()
}
}
function br(id){
	document.getElementById(id).innerHTML+= "<br/>"
}
makeText("Hello, subject 37",40,"console1",750,function(){
br("console1")
makeText("Well, actually you're subject 1, but we wanted you to think there was people before you.",40,"console1",1000,function(){

}
)
})
function build(name,raw,description){
var a = '<h4>'+name+'</h4>'
if(description!=undefined){
  a += "<p>"+description+"</p>"
}
document.getElementById("content").innerHTML += a + '<a href = "'+raw+'">raw</a><br>'
}

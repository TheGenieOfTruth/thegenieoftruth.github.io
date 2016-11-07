function save(cname, cvalue) {
    exdays = 100
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function load(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
var hold;
document.addEventListener('DOMContentLoaded', function () {
	if(load("urls")[0]==undefined){var urls = []
}
else{var urls = load("urls").split(",")
for(i=0;i<urls.length;i=i+1){
document.getElementById("stuff").innerHTML = document.getElementById("stuff").innerHTML+"<p id = '"+i+"'>"+urls[i]+"</p>"}
for(i=0;i<urls.length;i=i+1){
  document.getElementById(String(i)).onclick = function(){
document.getElementById(this.id).innerHTML = ""
urls[this.id] = ""
save("urls",urls)
}
}
}
  document.getElementById('basic-addon1').addEventListener('click', function(){
  if(document.getElementById("urlInput").value.length>2){
    if(document.getElementById("urlInput").value.substring(0,8)=="https://"||document.getElementById("urlInput").value.substring(0,7)=="http://"){}
    else{document.getElementById("urlInput").value="http://"+document.getElementById("urlInput").value}}
  
  document.getElementById("stuff").innerHTML = document.getElementById("stuff").innerHTML+"<p  id = '"+urls.length+"'>"+document.getElementById("urlInput").value+"</p>";urls[urls.length]=document.getElementById("urlInput").value;document.getElementById("urlInput").value="";save("urls",urls)
  for(i=0;i<urls.length;i=i+1){  document.getElementById(String(i)).onclick = function(){
document.getElementById(this.id).innerHTML = ""
urls[this.id] = ""
save("urls",urls)
}}

  });
document.getElementById('openAll').addEventListener('click',function(){
  if(document.getElementById("urlInput").value.length>2){
    if(document.getElementById("urlInput").value.substring(0,8)=="https://"||document.getElementById("urlInput").value.substring(0,7)=="http://"){}
    else{document.getElementById("urlInput").value="http://"+document.getElementById("urlInput").value}}
  
  document.getElementById("stuff").innerHTML = document.getElementById("stuff").innerHTML+"<p  id = '"+urls.length+"'>"+document.getElementById("urlInput").value+"</p>";urls[urls.length]=document.getElementById("urlInput").value;document.getElementById("urlInput").value="";save("urls",urls)
  for(i=0;i<urls.length;i=i+1){  document.getElementById(String(i)).onclick = function(){
document.getElementById(this.id).innerHTML = ""
urls[this.id] = ""
save("urls",urls)
}}


	for(i=0;i<urls.length;i++){
		if(urls[i].length>2){
		chrome.tabs.create({url:urls[i]});}
		
	}
})
  });
//document.getElementById("basic-addon1").addEventListener("click",function(){document.getElementById("stuff").innerHTML = document.getElementById("stuff").innerHTML+'<div class = "input-group" id = "content"><input class = "form-control" placeholder = "Enter a URL here. Ex: https://www.google.com"/><span  style = "font-size:20px;width:50px;color:black" class="input-group-addon btn btn-danger" id="basic-addon1">x</span></div>'}, false);

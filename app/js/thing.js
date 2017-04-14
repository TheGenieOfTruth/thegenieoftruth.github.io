$(".regular").slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
});
var elem = $("<div></div>")
elem.css("background","white")
elem.css("padding","2px 0px")
elem.css("margin","30px 0px")
elem.css("width","0%")
var n1 = elem.clone()
var n2 = elem.clone()
n2.css("margin-left","100%")
$("#header-target").prepend(n1)
$("#header-target").append(n2)
n1.animate({
	"width":"80%",
	"margin-left":"10%"
},1000)
n2.animate({
	"width":"80%",
	"margin-left":"10%"
},1000)
setTimeout(function(){
	outport.start()
	outport.explode()
},800)
var obj = {"text":"You find yourself in a place, and you think about doing a thing","link":[{"text":"%%opt This is a option%% \nYou realize that this option was probably an option 0.8177255025008481","link":[]},{"text":"%%opt This is an option%% \nYou realize that this option was probably an option 0.4713419905367273","link":[]},{"text":"%%opt This is an%% \nYou realize that this option was probably an option 0.6899407288965576","link":[]}]}
function map(a){
	a.link.forEach(function(val){
		var code = /%%((?!%).)*%%/g
		var fixed = val.text.replace(/%%((?!%).)*%%/g,"")
		var matches = val.text.match(code)
		matches.forEach(function(match){
			console.log(match)
			if(match.substring(0,5) == "%%opt"){
				console.log("Choice verified as: " + match.substring(6,match.length-2))
				val.opt = match.substring(6,match.length-2)
			}
		})
	})
}
map(obj)
function render(a){
	$("#container").html("")
	$("#container").append($("<p>"+a.text+"</p>"))
	a.link.forEach(function(val,i){
		if(val.opt != undefined){
			$("#container").append($("<button id = "+i+">"+val.opt+"</button>"))
			$("#"+i).click(function(){
				if(val.link.length>0){
					render(val.link)
				} else{
					$("#container").html("gg")
				}
			})
		}
	})
}
render(obj)
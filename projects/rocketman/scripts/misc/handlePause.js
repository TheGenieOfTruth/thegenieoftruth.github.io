module.exports = function(obj,key,psc){
	function wait(){
		obj.start()
		console.log("START")
		psc.visible = false
		key.tethers.splice(key.tethers.indexOf(wait),1)

	}
	key.check(80,function(){
		obj.stop()
		console.log("STOP")
		psc.visible = true
		key.wait(80,wait)
	})

}
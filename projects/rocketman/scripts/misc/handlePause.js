module.exports = new function(){
	var a = this
	this.allow = true
	this.handle = function(obj,key,psc){
	function wait(){
		obj.start()
		console.log("START")
		psc.visible = false
	}
	function allow(){
		a.allow = true
	}
	key.check(80,function(){
		if(a.allow){
		obj.stop()
		console.log("STOP")
		psc.visible = true
		a.allow = false
		key.waitUp(80,function(){
			key.waitDown(80,wait)
			key.waitUp(80,allow)
		})}
	})}

}
module.exports = new function(){
	var a = this
	this.allow = true
	this.handle = function(obj,key,psc,sound,jammed,mute){

		if(!jammed){
		psc.bringToFront()
		mute.bringToFront()
	function wait(){
		obj.start()
		sound.volume(1);
		console.log("START")
		psc.visible = false
	}
	function allow(){
		a.allow = true
	}
	key.check(80,function(){
		if(a.allow){
		obj.stop()
		sound.volume(0.1);
		console.log("STOP")
		psc.visible = true
		a.allow = false
		key.waitUp(80,function(){
			key.waitDown(80,wait)
			key.waitUp(80,allow)
		})}
	})}
}
}
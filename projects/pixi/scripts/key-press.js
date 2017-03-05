module.exports = new function(){
    var a = this
    this.map = [];
    this.listen = function(){
        var param = arguments[0] == undefined ? false : arguments[0]
        document.onkeydown = function (e) {
            e = e || window.event;
            e = e.which || e.keyCode || 0
            if(a.map.indexOf(e) == -1){
                a.map.push(e)
            }
            if(param == "loud"){
                console.log(a.map)
            }
        };
        document.onkeyup = function (e) {
            e = e || window.event;
            e = e.which || e.keyCode || 0
            // use e.keyCode
            if(a.map.indexOf(e) != -1){
                a.map.splice(a.map.indexOf(e),1)
            }
            if(param == "loud"){
                console.log(a.map)
            }
        };
    }
    this.check = function(key,callback){
        if(a.map.indexOf(key)!=-1){
            callback()
        }
    }

}

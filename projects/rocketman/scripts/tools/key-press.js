module.exports = new function() {
    var a = this
    this.map = [];
    this.tethers = [];
    this.listen = function() {
        var param = arguments[0] == undefined ? false : arguments[0]
        document.onkeydown = function(e) {
            e = e || window.event;
            e = e.which || e.keyCode || 0
            if (a.map.indexOf(e) == -1) {
                a.map.push(e)
            }
            if (param == "loud") {
                console.log(a.map)
            }
            a.tethers.forEach(function(tether,index){
                if(a.map.indexOf(tether.key)!=-1){
                   tether.func()
                   a.map.splice(a.map.indexOf(e), 1)
                   a.tethers.splice(index, 1)
                }
            })

        };
        document.onkeyup = function(e) {
            e = e || window.event;
            e = e.which || e.keyCode || 0
                // use e.keyCode
            if (a.map.indexOf(e) != -1) {
                a.map.splice(a.map.indexOf(e), 1)
            }
            if (param == "loud") {
                console.log(a.map)
            }

        };
    }
    this.check = function(key, callback, not) {
        if (typeof key != "object") {
            key = [key]
        }
        for (i = 0; i < key.length; i++) {
            if (a.map.indexOf(key[i]) != -1) {
                callback()
                i = key.length
                return;
            }
        }
        if (not !== undefined) {
            not()
        }
    }
    this.wait = function(key,func){
        a.tethers.push({
            "key":key,
            "func":func
        })
    }
}
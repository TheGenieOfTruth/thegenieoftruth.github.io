var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = new function () {
    var a = this;
    this.map = [];
    this.tethers = [];
    this.listen = function () {
        var param = arguments[0] == undefined ? false : arguments[0];
        document.onkeydown = function (e) {
            e = e || window.event;
            e = e.which || e.keyCode || 0;
            if (a.map.indexOf(e) == -1) {
                a.map.push(e);
            }
            a.tethers.forEach(function (tether, index) {
                if (tether.type == "down") {
                    if (e === tether.key) {
                        tether.func();
                        if (!tether.perma) a.tethers.splice(index, 1);
                    }
                }
            });
        };
        document.onkeyup = function (e) {
            e = e || window.event;
            e = e.which || e.keyCode || 0;
            // use e.keyCode
            if (a.map.indexOf(e) != -1) {
                a.map.splice(a.map.indexOf(e), 1);
            }
            a.tethers.forEach(function (tether, index) {
                if (tether.type == "up") {
                    if (e === tether.key) {
                        tether.func();
                        if (!tether.perma) a.tethers.splice(index, 1);
                    }
                }
            });
        };
    };
    this.check = function (key, callback, not) {
        if ((typeof key === "undefined" ? "undefined" : _typeof(key)) != "object") {
            key = [key];
        }
        for (i = 0; i < key.length; i++) {
            if (a.map.indexOf(key[i]) != -1) {
                callback();
                i = key.length;
                return;
            }
        }
        if (not !== undefined) {
            not();
        }
    };
    this.waitUp = function (key, func, perma) {
        if (perma === undefined) {
            perma = false;
        }
        a.tethers.push({
            "key": key,
            "func": func,
            "type": "up",
            "perma": perma
        });
    };
    this.waitDown = function (key, func, perma) {
        if (perma === undefined) {
            perma = false;
        }
        a.tethers.push({
            "key": key,
            "func": func,
            "type": "down",
            "perma": perma
        });
    };
}();
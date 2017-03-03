Array.prototype.multiIndexOf = function(el) {
    var idxs = [];
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] === el) {
            idxs.unshift(i);
        }
    }
    return idxs;
};
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
var maps = [`
+++++++
+ >   +
+++++ +
+f    +
+++++++
`,
    `
+++++++++++++++++++++++++++++++
+     +                       +
+>=+ =                       f+
+  + =                        +
+++++++++++++++++++++++++++++++
`,
    `
+++++++++++++
+          f+
+ +++++++++++
+  +        +
++ + ++++++ +
+  + +>+    +
+ ++   + ++++
+  +++++    +
+      ++++ +
+   +       +
+++++++++++++
`
]
var restrict = []
var mapNum = -1
var preserve;

function newMap() {
    document.getElementById("map").innerHTML = ""
    mapNum++
    map = maps[mapNum]
    map = map.split("\n")
    map = map.slice(1, map.length - 1)
    for (i = 0; i < map.length; i++) {
        map[i] = map[i].split("")
    }
    for (i = 0; i < map.length; i++) {
        for (j = 0; j < map[i].length; j++) {
            document.getElementById("map").innerHTML += "<tile id = " + i +
                "-" + j + ">" + map[i][j] + "</tile>"
        }
        document.getElementById("map").innerHTML += "<br>"
    }
    preserve = map
}
newMap()

function getLocations() {
    gates = new Array()
    for (i = 0; i < map.length; i++) {
        var loc = map[i].indexOf(">")
        if (!(loc === -1)) {
            player = {
                y: i,
                x: loc
            }
        }
        loc = map[i].indexOf("f")
        if (!(loc === -1)) {
            finish = {
                y: i,
                x: loc
            }
        }
        loc = map[i].multiIndexOf("=")
        for(j=0;j<loc.length;j++){
            loc[j] = {y:i,x:loc[j]}
        }
        if (loc.length > 0) {
            gates = gates.concat(loc)
        }
    }
}
getLocations()

function log(msg) {
    document.getElementById("log").innerHTML = "<p id = '0' class = 'message'>" + msg + "</p>" + document.getElementById(
        "log").innerHTML
        messages = document.getElementsByClassName("message")
        for(i=0;i<messages.length;i++){
            messages[i].id = Number(messages[i].id)+1
            messages[i].style = "color:rgba(255,255,255,"+String(1-messages[i].id/10)+")"
            if(messages[i].id==="10"){
                messages[i].remove()
            }
        }
}
function replaceGates(){
    for(i=0;i<gates.length;i++){
        map[gates[i].y][gates[i].x] = "="
        document.getElementById(gates[i].y+"-"+gates[i].x).innerHTML = "="
    }
}
function moveDirection(x, y, direction) {
    /*
    into > Is the player going into a gate?
    ongate > Is the player on a gate before they move?
    valid > Are the specified criteria fit?
    allow > Handle excpetions (Eg: Gates are never used, so allow not going into a gate, or going into a gate correctly)
    */
    var gate = new function(){

        this.into =
            map[player.y - y][player.x +x] === "="

        this.ongate =
            map[player.y][player.x] === "="

        this.valid =
            this.into && (direction === "left" || direction === "right")

        this.allow =
            !this.into || this.valid

    }
    var movement = new function(){
        this.restricted =
            !(restrict.indexOf(direction)===-1)

        this.collision = new function(){
            this.nothing = map[player.y - y][player.x + x] != undefined
            this.wall = map[player.y - y][player.x + x] != "+"
        }
        this.valid =
            this.collision.nothing&&this.collision.wall

        this.allow =
            this.valid&&gate.allow&&!(this.restricted)

    }
    if (allowMove) {
        y = -y
        if (movement.allow) {

            if(gate.valid){
                log("You step into a horizontal gate")
                restrict = ["up","down"]
            } else{
                restrict = []
            }
            map[player.y][player.x] = " "
            document.getElementById(player.y + "-" + player.x).innerHTML =
                " "
            player.x += x
            player.y += y
            map[player.y][player.x] = ">"
            replaceGates()
            if (finish.y === player.y && finish.x === player.x) {
                finish.y = undefined;
                finish.x = undefined
                log("You have completed level " + String(Number(mapNum) + 1))
                newMap()
                getLocations()
            }
        }
        gate.ongate =
            preserve[player.y][player.x] === "="
        if(gate.valid||gate.ongate){
        document.getElementById(player.y + "-" + player.x).innerHTML =
            "<stackTile>=</stackTile>"+
            "<span class = 'rotate" + direction + " rotated'>></span>"
        } else{
        document.getElementById(player.y + "-" + player.x).innerHTML =
            "<span class = 'rotate" + direction + " rotated'>></span>"
        }
    }
}
var allowMove = true

Mousetrap.bind(["right", "d"], function() {
    moveDirection(1, 0, "right")
    allowMove = false
},"keydown")
Mousetrap.bind(["left", "a"], function() {
    moveDirection(-1, 0, "left")
    allowMove = false
},"keydown")
Mousetrap.bind(["up", "w"], function() {
    moveDirection(0, 1, "up")
    allowMove = false
},"keydown")
Mousetrap.bind(["down", "s"], function() {
    moveDirection(0, -1, "down")
    allowMove = false
},"keydown")
Mousetrap.bind(["right", "d","left","a","up","w","down","s"],function(){
    allowMove = true
},"keyup")

var misc = {
    c1: 0
}

function addCanvas() {
		for(i=0;i<2;i++){
    var elem = document.createElement("canvas")
    elem.width = 500
    elem.height = 800
    misc.c1 += 1
    elem.id = "canvas" + misc.c1
    elem.style = "z-index:" + misc.c1
    elem.className = "layer"
    document.getElementById("canvasses").appendChild(elem)
    }
}
    function color(hex){
    		ctx.strokeStyle = hex
    }
function clear() {
    ctx.clearRect(0, 0, c.width, c.height);
}

function point(x, y) {
    //Iniation script, personal canvas for the point
    addCanvas()
    this.layer = misc.c1
   	//Local c & ctx, used for drawing sprite picture
    this.c = document.getElementById("canvas" + String(this.layer-1))
    this.ctx = this.c.getContext("2d")
    //This points drawing canvas, used for this.localize()
    this.lc = document.getElementById("canvas" + this.layer)
    this.lctx =  this.lc.getContext("2d")
    //Position, x and y
    this.x = x
    this.y = y
    this.color = "black"
    this.lineWidth = 1
    //The tool that is used to draw with a sprite
    this.pen = false
    //The direction the sprite is pointing for steps
    this.angle = 90
	//If true, drawings will go onto a seperate canvas, being able to be cleared with objname.clear()
	this.local = false
    this.shown = false
    this.step = function(steps) {
    		this.init(function(c,ctx){

        //Moves startx and starty, and updates, draw line if pendown
        function rotate_point(pointX, pointY, originX, originY, angle) {
            angle = angle * Math.PI / 180.0;
            return {
                x: Math.cos(angle) * (pointX - originX) - Math.sin(
                    angle) * (pointY - originY) + originX,
                y: Math.sin(angle) * (pointX - originX) + Math.cos(
                    angle) * (pointY - originY) + originY
            };
        }
        if (this.pen) {
            ctx.beginPath()
        }
        ctx.moveTo(this.x, this.y)
        var check = rotate_point(this.x + steps, this.y, this.x, this.y,
            this.angle)
        ctx.lineTo(check.x, check.y)
        this.y = check.y
        this.x = check.x
        if (this.pen) {
            ctx.stroke()
        }
        }.bind(this))
    }
    this.rotate = function(degrees) {
        this.angle += degrees
    }
    this.rotateLeft = function(degrees){
    		this.angle+= -degrees
    }
    this.rotateRight = function(degrees){
    		this.angle+= degrees
    }
    this.setAngle = function(degrees) {
        this.angle = degrees
    }
    this.penDown = function() {
        this.pen = true
            //Activate drawing
    }
    this.penUp = function() {
        this.pen = false
            //Disable drawing
    }
    this.moveX = function (steps){
    	this.init(function(c,ctx){
    	this.x+=steps
      }.bind(this))
    }
    this.moveY = function(steps){
    	this.init(function(c,ctx){
    	this.y+=steps
      }.bind(this))
    }
    this.goTo = function(x, y) {
    		this.init(function(c,ctx){
        //Set position
        if (this.pen) {
            ctx.beginPath()
        }
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(x, y)
        this.y = y
        this.x = x
        if (this.pen) {
            ctx.stroke()
        }
        }.bind(this))
    }
    this.show = function() {
    		this.init(function(c,ctx){
    		this.shown = true
        }.bind(this))
    }
    this.hide = function() {
    		this.init(function(c,ctx){
    		this.shown = false
        this.clear()
        }.bind(this))
    }
    this.update = function(){
    		if(this.shown){
    		this.clearSprite()
    		var ctxl = this.ctx
        ctxl.beginPath();
        ctxl.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        ctxl.stroke();
        ctxl.fill()
        }

    }
    this.clearSprite = function(){
    		var h1 = this.ctx
        var h2 = this.c

    		h1.clearRect(0, 0, h2.width, h2.height);

    }
	this.setLayer = function(layer){
		this.lc.style.zIndex = layer
	}
	this.changeLayer = function(layers){
		this.lc.style.zIndex = layers
	}
	this.clear = function(){
		this.lctx.clearRect(0, 0, this.lc.width, this.lc.height);
	}
	//Draw local, on a special canvas only clearable by objname.clear()
	this.localize = function(){
		this.local = true
	}
	//Draw global, on the canvas shared by every element
	this.globalize = function(){
		this.local = false
	}
    this.init = function(code){
		if(this.local===true){
		var lc = this.lc
		var lctx = this.lctx
		lctx.fillStyle = this.color
        lctx.lineWidth = this.lineWidth
        lctx.strokeStyle = this.color
		code(lc,lctx)
		}
		else{
			ctx.fillStyle = this.color
        ctx.lineWidth = this.lineWidth
        ctx.strokeStyle = this.color
		code(c,ctx)
		}
        this.update()

    }

    this.update()
}
var c = document.getElementById("canvas0");
var ctx = c.getContext("2d");
ctx.lineWidth = 0.2
var test = new point(250, 400)
var test2 = new point(250,400)
var test3 = new point(0,0)
test.show()

test2.show()
test3.show()
var x = 1
var y = 0
var ct = 0
var scale = 0.1
test.penDown()
		setInterval(function(){
    test.step(5*(scale))
    test.rotate(3-x)
    test2.goTo(test.x,test.y)
    test2.penDown()
    test2.step(10*scale-x*scale)
    test2.rotate(3)
    test2.step(20*scale-x*scale)
   x += 1

    },0)

    test3.hide()

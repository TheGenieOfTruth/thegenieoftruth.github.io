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
test.pendown()
		setInterval(function(){
    test.step(5*(scale))
    test.rotate(3-x)
    test2.goto(test.x,test.y)
    test2.pendown()
    test2.step(10*scale-x*scale)
    test2.rotate(3)
    test2.step(20*scale-x*scale)
   x += 1
    
    },0)
    
    test3.hide()
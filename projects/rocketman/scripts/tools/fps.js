module.exports = function(fps,cb){
this.going = true
this.start = function(){
    this.going = true
    requestAnimationFrame(draw);
}
this.resume = this.start
this.stop = function(){
    this.going = false
}
this.pause = this.stop
this.toggle = function(){
    this.going = !this.going
}
this.latch = function(a){
    cb = require("./../tools/merge")(cb,a)
}
this.restart = function(){
    ct = 0;
}
var a = this
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;
var ct = 0;
function every(count,callback){
    if(ct % count == 0){
        callback()
    }
}
function draw() {
    if(a.going){
        requestAnimationFrame(draw);
    }

    now = Date.now();
    delta = now - then;

    if (delta > interval) {
        ct++
        // update time stuffs

        // Just `then = now` is not enough.
        // Lets say we set fps at 10 which means
        // each frame must take 100ms
        // Now frame executes in 16ms (60fps) so
        // the loop iterates 7 times (16*7 = 112ms) until
        // delta > interval === true
        // Eventually this lowers down the FPS as
        // 112*10 = 1120ms (NOT 1000ms).
        // So we have to get rid of that extra 12ms
        // by subtracting delta (112) % interval (100).
        // Hope that makes sense.

        then = now - (delta % interval);

        cb(ct,a,every)
    }
}

draw();
return this;
}

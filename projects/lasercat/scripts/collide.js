module.exports = function(r1, r2,callback) {
    var dx=(r1.x+r1.width/2)-(r2.x+r2.width/2);
    var dy=(r1.y+r1.height/2)-(r2.y+r2.height/2);
    var width=(r1.width+r2.width)/2;
    var height=(r1.height+r2.height)/2;
    var crossWidth=width*dy;
    var crossHeight=height*dx;
    var collision='none';
    //
    if(Math.abs(dx)<=width && Math.abs(dy)<=height){
        collision = 'y'
    }
    function handle(code,cb){
        if(collision == code){
            cb()
        }
    }
    callback(handle)
}

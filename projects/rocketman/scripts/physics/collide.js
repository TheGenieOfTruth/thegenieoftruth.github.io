module.exports = function(r1, r2,callback) {
    var dx=(r1.worldTransform.tx+r1.width/2)-(r2.worldTransform.tx+r2.width/2);
    var dy=(r1.worldTransform.ty+r1.height/2)-(r2.worldTransform.ty+r2.height/2);
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

module.exports = function(r1, r2,callback) {
<<<<<<< HEAD
    var dx=(r1.worldTransform.tx+r1.width/2)-(r2.worldTransform.tx+r2.width/2);
    var dy=(r1.worldTransform.ty+r1.height/2)-(r2.worldTransform.ty+r2.height/2);
=======
    var dx=(r1.worldTransform.dx+r1.width/2)-(r2.worldTransform.dx+r2.width/2);
    var dy=(r1.worldTransform.d+r1.height/2)-(r2.worldTransform.dy+r2.height/2);
>>>>>>> 6c4f550e3b46fe73043e77adbd50db34d77340ae
    var width=(r1.width+r2.width)/2;
    var height=(r1.height+r2.height)/2;
    var crossWidth=width*dy;
    var crossHeight=height*dx;
    var collision=false;
    //
    if(Math.abs(dx)<=width && Math.abs(dy)<=height){
        collision = true
    }
    return collision
}

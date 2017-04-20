module.exports = function(r1, r2,type) {
    if (r1.invincible === true || r2.invincible === true) {
        return false;
    }
    //Define the variables we'll need to calculate
    var hit, combinedHalfWidths, combinedHalfHeights,combinedHalfDepths, vx, vy,vz,map;
    //hit will determine whether there's a collision
    hit = false;
    map = {};
    //Find the center points of each sprite
    r1.centerX = r1.position.x;
    r1.centerY = r1.position.y;
    r1.centerZ = r1.position.z;
    r2.centerX = r2.position.x;
    r2.centerY = r2.position.y;
    r2.centerZ = r2.position.z;
    //Find the half-widths and half-heights of each sprite
    r1.halfWidth = r1.geometry.parameters.width / 2;
    r1.halfHeight = r1.geometry.parameters.height / 2;
    r1.halfDepth = r1.geometry.parameters.depth / 2;
    // lol ur mom is so r1.halfWidth * 10
    r2.halfWidth = r2.geometry.parameters.width / 2;
    r2.halfHeight = r2.geometry.parameters.height / 2;
    r2.halfDepth = r2.geometry.parameters.depth / 2;
    //Calculate the distance vector between the sprites
    vx = r1.position.x - r2.position.x;
    vy = r1.position.y - r2.position.y;
    vz = r1.position.z - r2.position.z
    //Figure out the combined half-widths and half-heights
    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;
    combinedHalfDepths = r1.halfDepth + r2.halfDepth;
    //Check for a collision on the x axis
    if (Math.abs(vx) < combinedHalfWidths) {
        //Collision on the x axis
        if (Math.abs(vy) < combinedHalfHeights) {
          //Collision on the y axis
            if (Math.abs(vz) < combinedHalfDepths) {
              //Collision on the z axis
            if(!type){
              return true;
            }
          }
        }
    }
    map.left = false;
    map.right = false;
    map.bottom = false;
    map.top = false;
    map.back = false;
    map.front = false;
    map.set = function(param){
      this[param] = true;
    }
    
       if (Math.abs(vx) < combinedHalfWidths) {
        //Collision on the x axis
        if(vx<0){
          map.set("left")
        }
        if(vx>=0){
          map.set("right")
        }
      }
    if (Math.abs(vy) < combinedHalfHeights) {
        //Collision on the y axis
        if(vy<0){
          map.set("bottom")
        }
        if(vy>=0){
          map.set("top")
        }
      }
    if (Math.abs(vz) < combinedHalfDepths) {
        if(vz<0){
          map.set("back")
        }
        if(vz>=0){
          map.set("front")
        }
      }
    if(type === "loud"){
      return map;
    }
    if(type === "contain"){
      if(map.right){
        if (r1.position.x + r1.xvel + 0.001 < r2.position.x+r2.halfWidth) {
        if (Math.abs(r1.xvel) < 0.01) {
            r1.xvel = 0
          }
          r1.xvel *= -0.4
          r1.position.x = r2.position.x+r2.halfWidth
        }
      }
      if(map.left){
        if (r1.position.x + r1.xvel + 0.001 > r2.position.x-r2.halfWidth) {
        if (Math.abs(r1.xvel) < 0.01) {
            r1.xvel = 0
          }
          r1.xvel *= -0.4
          r1.position.x = r2.position.x+r2.halfWidth
        }
      }
      if(map.top){
        
      }
      if(map.bottom){
        
      }
      if(map.front){
        
      }
      if(map.back){
        
      }
    }
    return false;
};
module.exports = function (r1, r2) {
    if (r1.invincible === true || r2.invincible === true) {
        return false;
    }
    //Define the variables we'll need to calculate
    var hit, combinedHalfWidths, combinedHalfHeights, combinedHalfDepths, vx, vy, vz;
    //hit will determine whether there's a collision
    hit = false;
    //Find the center points of each sprite
    r1.centerX = r1.position.x + r1.geometry.parameters.width / 2;
    r1.centerY = r1.position.y + r1.geometry.parameters.height / 2;
    r1.centerZ = r1.position.z + r1.geometry.parameters.depth / 2;
    r2.centerX = r2.position.x + r2.geometry.parameters.width / 2;
    r2.centerY = r2.position.y + r2.geometry.parameters.height / 2;
    r2.centerZ = r2.position.z + r2.geometry.parameters.depth / 2;
    //Find the half-widths and half-heights of each sprite
    r1.halfWidth = r1.geometry.parameters.width / 2;
    r1.halfHeight = r1.geometry.parameters.height / 2;
    r1.halfDepth = r1.geometry.parameters.depth / 2;
    // lol ur mom is so r1.halfWidth * 10
    r2.halfWidth = r2.geometry.parameters.width / 2;
    r2.halfHeight = r2.geometry.parameters.height / 2;
    r2.halfDepth = r2.geometry.parameters.depth / 2;
    //Calculate the distance vector between the sprites
    vx = r1.centerX - r2.centerX;
    vy = r1.centerY - r2.centerY;
    vz = r1.centerZ - r2.centerZ;
    //Figure out the combined half-widths and half-heights
    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;
    combinedHalfDepths = r1.halfDepth + r2.halfDepth;
    //Check for a collision on the x axis
    if (Math.abs(vx) < combinedHalfWidths) {
        //A collision might be occuring. Check for a collision on the y axis
        if (Math.abs(vy) < combinedHalfHeights) {
            if (Math.abs(vz) < combinedHalfDepths) {
                return true;
            }
        }
    }
    return false;
};
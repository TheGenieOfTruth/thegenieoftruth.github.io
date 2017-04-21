module.exports = function (r1, r2, type) {
    if (r1.invincible === true || r2.invincible === true) {
        return false;
    }
    //Define the variables we'll need to calculate
    var hit, combinedHalfWidths, combinedHalfHeights, combinedHalfDepths, vx, vy, vz;
    //hit will determine whether there's a collision
    hit = false;
    map = {};
    map.left = false;
    map.right = false;
    map.bottom = false;
    map.top = false;
    map.back = false;
    map.front = false;
    map.set = function (param, amt) {
        this[param] = true;
    };
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
    vz = r1.position.z - r2.position.z;
    //Figure out the combined half-widths and half-heights
    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;
    combinedHalfDepths = r1.halfDepth + r2.halfDepth;
    //Check for a collision on the x axis
    if (Math.abs(vx) < combinedHalfWidths) {
        //Collision on the x axis
        if (vx < -r2.halfWidth) {
            map.set("left");
        }
        if (vx >= r2.halfWidth) {
            map.set("right");
        }
        map.x = combinedHalfWidths - Math.abs(vx) + r1.xvel;
    }
    if (Math.abs(vy) < combinedHalfHeights) {
        //Collision on the y axis
        if (vy < -r2.halfHeight) {
            map.set("bottom");
        }
        if (vy >= r2.halfHeight) {
            map.set("top");
        }
        map.y = combinedHalfHeights - Math.abs(vy) + r1.yvel;
    }
    if (Math.abs(vz) < combinedHalfDepths) {
        if (vz < -r2.halfDepth) {
            map.set("back");
        }
        if (vz >= r2.halfDepth) {
            map.set("front");
        }
        map.z = combinedHalfDepths - Math.abs(vz) + r1.zvel;
    }
    if (type === "loud") {
        return map;
    }
    if (Math.abs(vx) < combinedHalfWidths) {
        //Collision on the x axis
        if (Math.abs(vy) < combinedHalfHeights) {
            //Collision on the y axis
            if (Math.abs(vz) < combinedHalfDepths) {
                //Collision on the z axis
                if (type === "contain") {
                    if (map.right && map.x < map.z && map.x < map.y) {
                        r1.xvel *= -0.4;
                        r1.position.x = r2.position.x + r2.halfWidth + r1.halfWidth;
                    }
                    if (map.left && map.x < map.z && map.x < map.y) {
                        r1.xvel *= -0.4;
                        r1.position.x = r2.position.x - r2.halfWidth - r1.halfWidth;
                    }
                    if (map.top && map.y < map.z && map.y < map.x) {
                        r1.yvel *= -0.4;
                        r1.position.y = r2.position.y + r2.halfHeight + r1.halfHeight;
                    }
                    if (map.bottom && map.y < map.z && map.y < map.x) {
                        r1.yvel *= -0.4;
                        r1.position.y = r2.position.y - r2.halfHeight - r1.halfHeight;
                    }
                    if (map.front && map.z < map.y && map.z < map.x) {
                        r1.zvel *= -0.4;
                        r1.position.z = r2.position.z + r2.halfDepth + r1.halfDepth;
                    }
                    if (map.back && map.z < map.y && map.z < map.x) {
                        r1.zvel *= -0.4;
                        r1.position.z = r2.position.z - r2.halfDepth - r1.halfDepth;
                    }
                }
                if (!type) {
                    return true;
                }
            }
        }
    }
    return false;
};
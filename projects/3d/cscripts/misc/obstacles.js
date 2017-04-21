module.exports = new function () {
		var collide = require("./../physics/collide");
		var debug = require("./../tools/debug");
		this.obstacles = [];
		this.loop = function (player, scene) {
				var a = this;
				debug("Obstacles", this.obstacles.length);
				this.obstacles.forEach(function (obsGroup) {
						obsGroup.forEach(function (val) {
								val.position.z += 0.1;
								val.position.y += val.yvel;
								collide(player, val, "contain");
								if (val.position.z > -10) {
										val.yvel -= 0.1;
								}
								if (val.position.z > 5) {
										scene.remove(val);
										a.obstacles.splice(a.obstacles.indexOf(obsGroup), 1);
								}
						});
				});
		};
		this.create = function (scene, material) {
				var obsGroup = [];
				var a = new THREE.CubeGeometry(3, 10, 1);
				var c = new THREE.Mesh(a, material);
				scene.add(c);
				c.position.y = 1.5;
				c.position.x = -3.5;
				c.position.z = -40;
				c.yvel = 0;
				c.receiveShadow = true;
				obsGroup.push(c);
				this.obstacles.push(obsGroup);
		};
}();
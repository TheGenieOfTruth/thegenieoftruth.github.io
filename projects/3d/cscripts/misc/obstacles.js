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
																				if (val.position.z > 5) {
																									scene.remove(val);
																				}
															});
															if (obsGroup[0].position.z > 5) {
																				a.obstacles.splice(a.obstacles.indexOf(obsGroup), 1);
															}
										});
					};
					this.create = function (scene, material) {
										var obsGroup = [];
										//12 wide x 10 tall
										//Left
										(function () {
															var a = new THREE.CubeGeometry(3, 9, 1);
															var c = new THREE.Mesh(a, material);
															scene.add(c);
															c.position.y = 1.5;
															c.position.x = -3.5;
															c.position.z = -40;
															c.yvel = 0;
															c.receiveShadow = true;
															obsGroup.push(c);
										})();
										//Right
										(function () {
															var a = new THREE.CubeGeometry(3, 9, 1);
															var c = new THREE.Mesh(a, material);
															scene.add(c);
															c.position.y = 1.5;
															c.position.x = 3.5;
															c.position.z = -40;
															c.yvel = 0;
															c.receiveShadow = true;
															obsGroup.push(c);
										})();
										//Bottom
										(function () {
															var a = new THREE.CubeGeometry(4, 3, 1);
															var c = new THREE.Mesh(a, material);
															scene.add(c);
															c.position.y = -1.5;
															c.position.z = -40;
															c.yvel = 0;
															c.receiveShadow = true;
															obsGroup.push(c);
										})();
										//Top
										(function () {
															var a = new THREE.CubeGeometry(4, 3, 1);
															var c = new THREE.Mesh(a, material);
															scene.add(c);
															c.position.y = 4.5;
															c.position.z = -40;
															c.yvel = 0;
															c.receiveShadow = true;
															obsGroup.push(c);
										})();
										this.obstacles.push(obsGroup);
					};
}();
module.exports = new function () {
	var move = require("./../physics/goto.js");
	this.particles = [];
	var a = this;
	this.run = function (obj, scene) {
		var geometry = new THREE.CubeGeometry(0.1, 0.1, 0.1);
		var material = new THREE.MeshStandardMaterial({
			color: [0xe74c3c, 0xe67e22, 0xf1c40f][Math.floor(Math.random() * 2)],
			transparent: true
		});
		var cube = new THREE.Mesh(geometry, material);
		move(cube).to(obj);
		cube.castShadow = true;
		cube.receiveShadow = true;
		cube.yvel = 0;
		cube.position.y -= 0.1;
		this.particles.push(cube);
		scene.add(cube);
		move(cube).to(obj);
	};
	this.loop = function (scene) {
		this.particles.forEach(function (particle) {
			particle.material.opacity -= 0.01;
			move(particle).randomly([[-0.1, 0.1], [0, 0], [-0.1, 0.1]]).gravity(0.01);
			if (particle.material.opacity <= 0) {
				scene.remove(particle);
				a.particles.splice(a.particles.indexOf(particle), 1);
			}
		});
	};
}();
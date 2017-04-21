var key = require("./tools/key-press");
var particles = require("./drawing/particleAt");
var debug = require("./tools/debug");
var collide = require("./physics/collide");
var obstacles = require("./misc/obstacles");
key.listen();
var width = 650;
var height = 800;
var aspect = width / height;
var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);
document.body.appendChild(document.createElement("br"));
var camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
var controls = new THREE.OrbitControls(camera, renderer.domElement);
var geometry = new THREE.CubeGeometry(1, 1, 1);
var material = new THREE.MeshStandardMaterial({
    color: 0x2ecc71
});
var cube = new THREE.Mesh(geometry, material);

camera.position.z = 4;
camera.position.y = 4;
cube.position.y = -5;
var light = new THREE.AmbientLight(0x777777, 1);
scene.add(light);
var light2 = new THREE.PointLight(0xffffff, 1);
light2.position.z = 0;
light2.position.y = 3;
scene.add(light2);
var light3 = new THREE.PointLight(0xffffff, 0.5);
light3.position.z = 0;
light3.position.y = 6;
light3.castShadow = true;
scene.add(light3);
scene.add(new THREE.CameraHelper(light2.shadow.camera));
scene.add(cube);
/*var light = new THREE.SpotLight(0xffffff, 0.1);
  light.shadow.mapSize.width = light.shadow.mapSize.height = 1024
  light.castShadow = true;
  light.target = cube;
  light.position.z = -8
  scene.add(light);
  scene.add(new THREE.CameraHelper(light.shadow.camera))*/
scene.add(camera);
material = new THREE.MeshStandardMaterial({
    color: 0x888888
});
//Collision test cube
geometry = new THREE.CubeGeometry(4, 4, 4);

(function () {
    var a = new THREE.CubeGeometry(10, 1, 50);
    var c = new THREE.Mesh(a, material);
    scene.add(c);
    c.position.y = -3;
    c.position.z = -24;
    c.receiveShadow = true;
})();
(function () {
    var a = new THREE.CubeGeometry(10, 1, 50);
    var c = new THREE.Mesh(a, material);
    scene.add(c);
    c.position.y = 6;
    c.position.z = -24;
    c.receiveShadow = true;
})();
(function () {
    var a = new THREE.CubeGeometry(1, 10, 50);
    var c = new THREE.Mesh(a, material);
    c.position.x = 5.5;
    c.position.y = 1.5;
    c.position.z = -24;
    c.receiveShadow = true;
    scene.add(c);
})();
(function () {
    var a = new THREE.CubeGeometry(1, 10, 50);
    var c = new THREE.Mesh(a, material);
    c.position.x = -5.5;
    c.position.y = 1.5;
    c.position.z = -24;
    c.receiveShadow = true;
    scene.add(c);
})();

cube.zvel = 0;
cube.yvel = 0;
cube.xvel = 0;
//Shadows
cube.castShadow = true;
cube.receiveShadow = true;

function render() {
    /*
    ===========================
    |  Normal Control Scheme  |
    ===========================
    Garden variety controls,
    "For all of your controlling needs!"
        | Dependencies: 1
        * tools/key-press.js
    | Requirements: 2
        * key.listen() to initialise
        * run in a loop
        */
    key.check([65, 37], function () {
        cube.xvel -= 0.05;
        //Left
    });
    key.check([68, 39], function () {
        cube.xvel += 0.05;
        //Right
    });
    key.check([87, 38], function () {
        cube.zvel -= 0.05;
        //Up
    });
    key.check([40, 83], function () {
        cube.zvel += 0.05;
        //Down
    });
    key.check([32], function () {
        particles.run(cube, scene);
        cube.yvel += 0.005;
        //Rockets
    }, function () {
        if (!(cube.position.y <= -2)) cube.yvel -= 0.01;
    });
    key.check(80, function () {
        //Pause
    });
    cube.xvel *= 0.7;
    cube.zvel *= 0.7;
    //Floor
    if (cube.position.y + cube.yvel - 0.001 < -2) {
        if (Math.abs(cube.yvel) < 0.01) {
            cube.yvel = 0;
        }
        cube.yvel *= -0.4;
        cube.position.y = -2;
    }
    //Ceiling
    if (cube.position.y + cube.yvel > 5) {
        if (Math.abs(cube.yvel) < 0.01) {
            cube.yvel = 0;
        }
        cube.yvel *= -0.4;
        cube.position.y = 5;
    }
    //Left wall
    if (cube.position.x + cube.xvel < -4.5) {
        if (Math.abs(cube.xvel) < 0.01) {
            cube.xvel = 0;
        }
        cube.xvel *= -0.4;
        cube.position.x = -4.5;
    }
    //Right wall
    if (cube.position.x + cube.xvel > 4.5) {
        if (Math.abs(cube.xvel) < 0.01) {
            cube.xvel = 0;
        }
        cube.xvel *= -0.4;
        cube.position.x = 4.5;
    }
    //Camera side
    if (cube.position.z + cube.zvel + 0.001 > -10) {
        if (Math.abs(cube.zwadvel) < 0.01) {
            cube.zvel = 0;
        }
        cube.zvel *= -0.4;
        cube.position.z = -10;
    }
    //Far side
    if (cube.position.z + cube.zvel + 0.001 < -49) {
        cube.zvel = 14;
    }
    cube.position.x += cube.xvel;
    cube.position.z += cube.zvel;
    cube.position.y += cube.yvel;
    debug("Cube", JSON.stringify(cube.geometry.parameters));
    debug("z", cube.position.z);
    debug("y", cube.position.y);
    debug("zvel", cube.zvel);
    debug("xvel", cube.xvel);
    debug("yvel", cube.yvel);
    particles.loop(scene);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();
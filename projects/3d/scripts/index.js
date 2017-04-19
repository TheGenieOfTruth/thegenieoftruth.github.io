var key = require("./tools/key-press");
var particles = require("./drawing/particleAt")
var debug = require("./tools/debug");
var collide = require("./physics/collide");
key.listen()
var width = 650;
var height = 500;
var aspect = width / height;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);

var light = new THREE.PointLight(0xffffff, 1);

light.castShadow = true;

light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;

light.shadow.camera.near = 500;
light.shadow.camera.far = 4000;
light.shadow.camera.fov = 30;
light.position.y = 1
light.position.z = 2
light.rotation.x = -0.01
camera.add(light);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(0x2c3e50);
document.body.appendChild(renderer.domElement);
document.body.appendChild(document.createElement("br"));
var controls = new THREE.OrbitControls(camera, renderer.domElement);
var geometry = new THREE.CubeGeometry(1,1,1);
var material = new THREE.MeshStandardMaterial({
  color: 0x2ecc71
});

var cube = new THREE.Mesh(geometry, material);
cube.position.y = -2;
scene.add(cube);
scene.add( camera );


material = new THREE.MeshStandardMaterial({
  color: 0x888888
});
camera.position.z = 4;
camera.position.y = -1;
var oC = new THREE.Mesh(geometry,material)
scene.add(oC);
oC.position.z = -6;
oC.position.x = 2;
(function(){
var a = new THREE.CubeGeometry(10,1,50);

var c = new THREE.Mesh(a, material);
scene.add(c);
c.position.y = -3
c.position.z = -24;
})();
(function(){
var a = new THREE.CubeGeometry(10,1,50);

var c = new THREE.Mesh(a, material);
scene.add(c);
c.position.y = 6;
c.position.z = -24;
})();
(function(){
var a = new THREE.CubeGeometry(1,10,50);
var c = new THREE.Mesh(a, material);
c.position.x = 5.5;
c.position.y = 1.5;
c.position.z = -24;
scene.add(c);
})();
(function(){
var a = new THREE.CubeGeometry(1,10,50);
var c = new THREE.Mesh(a, material);
c.position.x = -5.5;
c.position.y = 1.5;
c.position.z = -24;
scene.add(c);
})();
cube.zvel = 0;
cube.yvel = 0;
cube.xvel = 0;
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
  key.check([65, 37], function() {
      cube.xvel -= 0.05
      //Left
  })
  key.check([68, 39], function() {
  		cube.xvel += 0.05
      //Right
  })
  key.check([87, 38], function() {
  	  cube.zvel -= 0.05
      //Up
  })
  key.check([40, 83], function() {
  	  cube.zvel += 0.05
      //Down
  })
  key.check([32], function() {
  	particles.run(cube,scene)
  	cube.yvel += 0.005
  	//Rockets
  },function(){
  	if(!(cube.position.y <= -2)) cube.yvel -= 0.01
  })
  key.check(80,function(){
  	
      //Pause
  })
  cube.xvel *= 0.7
  cube.zvel *= 0.7
  //Floor
  if(cube.position.y+cube.yvel-0.001 < -2){
  	if(Math.abs(cube.yvel)<0.01){
  		cube.yvel = 0
  	}
  	cube.yvel *= -0.4
  	cube.position.y = -2
  }
  //Ceiling
  if(cube.position.y > 5){
  	if(Math.abs(cube.yvel)<0.01){
  		cube.yvel = 0
  	}
  	cube.yvel *= -0.4
  	cube.position.y = 5
  }
  //Left wall
  if(cube.position.x+cube.xvel < -4.5){
  	if(Math.abs(cube.xvel)<0.01){
  		cube.xvel = 0
  	}
  	cube.xvel *= -0.4
  	cube.position.x = -4.5
  }
  //Right wall
  if(cube.position.x+cube.xvel > 4.5){
  	if(Math.abs(cube.xvel)<0.01){
  		cube.xvel = 0
  	}
  	cube.xvel *= -0.4
  	cube.position.x = 4.5
  }
  //Camera side
  if(cube.position.z+cube.zvel+0.001  > 0){
  	if(Math.abs(cube.zvel)<0.01){
  		cube.zvel = 0
  	}
  	cube.zvel *= -0.4
  	cube.position.z = 0
  }
  //Far side
  if(cube.position.z+cube.zvel+0.001  < -49){
  	cube.zvel = 14
  }
  
  cube.position.x += cube.xvel
  cube.position.z += cube.zvel
  cube.position.y += cube.yvel
  debug("stoof",JSON.stringify(cube.geometry.parameters))
  debug("z",cube.position.z)
  debug("x",cube.position.x)
  debug("y",cube.position.y)
  debug("zvel",cube.zvel)
  debug("xvel",cube.xvel)
  debug("yvel",cube.yvel)
  debug("Collision",collide(cube,oC))
  particles.loop(scene)
  renderer.render(scene, camera);
  if(!collide(cube,oC)){
  requestAnimationFrame(render);
  }
}
render();
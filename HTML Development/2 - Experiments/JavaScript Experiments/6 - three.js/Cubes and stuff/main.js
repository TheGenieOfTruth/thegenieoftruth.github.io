var scene    = new THREE.Scene();
  var camera   = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth/2, window.innerHeight/2);
  renderer.setClearColor(0x3399ff);
  document.body.appendChild(renderer.domElement);
function all(){
console.log("ya")
}
function addTo(code,mesh){
	var oldFunction = all
	newFunction = function(){
  code(mesh)
  oldFunction()
 
};
all = newFunction
}

  // (width, height, depth)
  for(j=0;j<100;j++){
  var geometry = new THREE.BoxGeometry(5, 5, 5);
  for ( var i = 0; i < geometry.faces.length; i +=2 ) {
  	var color = Math.random() * 0xffffff 
    geometry.faces[ i ].color.setHex( color);
	geometry.faces[ i + 1 ].color.setHex( color);
}
  var material = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors } );
  var mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh);

  // (color, intensity)
  var light = new THREE.PointLight(0xffffff, 1.2);
  // (x, y, z)
  light.position.set(0, 0, 6);
  scene.add(light);

  // move the camera back
  camera.position.z = 10;
  camera.position.y = 100
mesh.rotation.y = 5
  mesh.position.y = j*5
  addTo(function(mesh){mesh.rotation.y+=mesh.rotation.y/250;mesh.position.y+=0.5;mesh.rotation.z+=0.01},mesh)
  }
  var x = 0
  function render(){
	  all()
    requestAnimationFrame(render);
   camera.rotation.x=1.2
    renderer.render(scene, camera);
  }
  render();

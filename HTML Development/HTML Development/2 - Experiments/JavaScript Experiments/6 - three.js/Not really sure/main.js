//declare scene variable
var scene;
//create the scene
scene = new THREE.Scene()
//declare camera variable
var camera;
//assign three.js perspective camera to variable
camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
//declare renderer variable
var renderer;
//assign WebGL renderer object
renderer = new THREE.WebGLRenderer();
//set the size of the renderer
renderer.setSize( window.innerWidth, window.innerHeight );
//add the renderer to the html document body element document.body.appendChild( renderer.domElement );

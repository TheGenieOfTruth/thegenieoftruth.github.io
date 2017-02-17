//Global namespace slots: none
//This makes it so the user can use Left and Right arrow or A and D to control tab movement, if they are a move keyboard oriented user.
var settings = {
    moveSpeed: 0.05,
    turnSharpness:0.02,
    //1 for no friction, 0 for disabled movement
    friction:0.87
}
var yvel = 0
var xvel = 0
$(function() {
    function update(){
        vals.forEach(function(val){
            map.forEach(function(key){
                if(key===val[0]){
                    switch(val[1]){
                        case "LEFT":
                            xvel += -settings.moveSpeed
                        break;

                        case "RIGHT":
                            xvel += settings.moveSpeed
                        break;

                        case "FORWARD":
                            yvel += settings.moveSpeed
                        break;

                        case "BACKWARD":
                            yvel += -settings.moveSpeed
                        break;

                        case "TURN-LEFT":
                            camera.rotation.y += settings.turnSharpness
                        break;

                        case "TURN-RIGHT":
                            camera.rotation.y += -settings.turnSharpness
                        break;

                        case "TURN-UP":
                            camera.rotation.x += settings.turnSharpness
                        break;

                        case "TURN-DOWN":
                            camera.rotation.x += -settings.turnSharpness
                        break;
                    }
                }
            })
        })
    }
    var main = setInterval(function(){},100000)
	var direction = 0;
    var map = new Array()
    var vals = [
        [37,"LEFT"],
        [38,"FORWARD"],
        [40,"BACKWARD"],
        [39,"RIGHT"],
        [65,"TURN-LEFT"],
        [68,"TURN-RIGHT"],
        [87,"TURN-UP"],
        [83,"TURN-DOWN"]
    ]
	$(document).keydown(function() {
		var temp = map;
        if(map.indexOf(event.which)===-1) map.push(event.which);direction = 1
            clearInterval(main)
            update();
            main = setInterval(update, 10);


	});
	$(document).keyup(function(event) {
        console.log(map)
        if(map.indexOf(event.which)!==-1) map.splice(map.indexOf(event.which),1)
	});
});
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
renderer.setClearColor(0x2c3e50);
document.body.appendChild(renderer.domElement);

// (width, height, depth)
for(i=0; i < 10; i ++){
    var geometry = new THREE.CubeGeometry(10,10,10)
    var material = new THREE.MeshNormalMaterial()
    var mesh     = new THREE.Mesh(geometry, material)
    mesh.position.set(0, 0, -10*i);
    scene.add(mesh)
}
var geometry = new THREE.CubeGeometry(100,1,100)
var material = new THREE.MeshNormalMaterial()
var mesh     = new THREE.Mesh(geometry, material)
mesh.position.set(0, -30, 0);
scene.add(mesh)
var x = 0
camera.rotation.x = 0
camera.position.y = 0
function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
    camera.position.z+= -yvel
    camera.position.x+= xvel
    yvel *= settings.friction
    xvel *= settings.friction
}
render();

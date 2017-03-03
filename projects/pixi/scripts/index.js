
// create an new instance of a pixi stage
	var stage = new PIXI.Stage();
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
	// create a renderer instance.
	var renderer = PIXI.autoDetectRenderer(400, 300);
    renderer.backgroundColor = 0x1099bb
	// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);

	requestAnimationFrame( animate );
	// create a new Sprite using the texture
	var cat = new PIXI.Sprite(PIXI.Texture.fromImage("assets/cat.png"));

	// center the sprites anchor point
	cat.anchor.x = 0.5;
	cat.anchor.y = 0.5;
    cat.scale.x = 5;
    cat.scale.y = 5;
	// move the sprite t the center of the screen
	cat.position.x = 200;
	cat.position.y = 150;

	stage.addChild(cat);
    var x = 0
	function animate() {
        x+=0.01
	    requestAnimationFrame( animate );
	    // render the stage
        cat.y = 150+Math.sin(x)*50
				cat.x += 1
	    renderer.render(stage);
	}

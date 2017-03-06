window.onload = function() {
        var key = require("./key-press")
        var collide = require("./collide")
        var shapes = require("./shapes")
        var contain = require("./contain")
        var fps = require("./fps")
        key.listen()
            // create an new instance of a pixi stage
        var all = new PIXI.Container()
        stage = new PIXI.Container();
        var score = new PIXI.Container()
        all.addChild(stage);
        all.addChild(score)
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
        // create a renderer instance.
        var renderer = PIXI.autoDetectRenderer(640, 480);
        renderer.backgroundColor = 0x888888
            // add the renderer view element to the DOM
        shapes.renderer = renderer
        document.body.appendChild(renderer.view);
        // create a new Sprite using the texture
        setup()

        function setup() {
            var player = new PIXI.Sprite(shapes.rectangle(16, 16, "#27ae60"))
            player.x = 16
            var trail = []
            for (i = 0; i < 3; i++) {
                trail.push(new PIXI.Sprite(shapes.rectangle(16, 16, "#2ecc71")))
                trail[i].x = 16 * i
                stage.addChild(trail[i])
            }
            stage.addChild(player)
            var direction = "r"
            var hit = false
            var powerup = new PIXI.Sprite(shapes.rectangle(16, 16, "#3498db"))
            var enemies = []
            powerup.ingame = false

            function end() {
                if (!hit) {
                    player.setTexture(shapes.rectangle(16, 16, "#c0392b"))
                    trail.forEach(function(val) {
                        val.setTexture(shapes.rectangle(16, 16, "#e74c3c"))
                    })
                    hit = true
                    stop()
                    var end = new PIXI.Sprite(shapes.rectangle(1, renderer.height, "#2ecc71"))
                    text = new PIXI.Text("", {
                        font: "30px Pixel",
                        fill: "white"
                    });
                    text.anchor.x = 0.5;
                    text.x = renderer.width / 2
                    text.y = 200
                    score.addChild(end);
                    score.addChild(text);
                    var ct = 0
                    fps(20, function(frames) {
                        ct += 1
                        end.width += ct
                        renderer.render(all)
                        if (frames > 40) {
                            this.stop()
                            var words = "Nooo! Snake died D:".split("")
                            var piece = []

                            function loop() {
                                setTimeout(function() {
                                    if(("Nooo! Snake died D:").length>piece.length){
                                    loop()
                                } else{
                                    piece = piece.join("")+"\n"
                                    renderer.render(all)
                                    fps(10,function(frames){
                                        text.setText(piece+"Score: " + frames)
                                        renderer.render(all)
                                        if(trail.length<frames){
                                            this.stop()
                                        }
                                    })
                                }
                                    piece.push(words[0])
                                    words.shift()
                                    text.setText(piece.join(""))
                                    renderer.render(all)
                                }, 50)
                            }
                            loop()
                        }
                    })
                }
            }
            fps(10, function(frames, stop) {
                key.check(40, function() {
                    if (direction == "r" || direction == "l") {
                        direction = "d"
                    }
                    //Down
                })
                key.check(39, function() {
                    if (direction == "u" || direction == "d") {
                        direction = "r"
                    }
                    //Right
                })
                key.check(38, function() {
                    if (direction == "r" || direction == "l") {
                        direction = "u"
                    }
                    //Up
                })
                key.check(37, function() {
                    if (direction == "u" || direction == "d") {
                        direction = "l"
                    }
                    //Left
                })
                        if (!powerup.ingame) {
                            powerup.ingame = true
                            do {
                                powerup.x = Math.floor(Math.random() * (renderer.width / 16)) * 16
                                powerup.y = Math.floor(Math.random() * (renderer.height / 16)) * 16
                            } while ((powerup.x === player.x) && (powerup.y === player.y) || trail.filter(function(val) {
                                    return powerup.x === val.x && powerup.y === val.y
                                })
                                .length > 0 || enemies.filter(function(val) {
                                    return powerup.x === val.x && powerup.y === val.y
                                })
                                .length > 0
                            )
                            stage.addChild(powerup)
                            }
                        if (frames % 100 === 1) {
                            enemies.push(new PIXI.Sprite(shapes.rectangle(16, 16, "#e74c3c")))
                            var e = enemies[enemies.length - 1]
                            do {
                                e.x = Math.floor(Math.random() * (renderer.width / 16)) * 16
                                e.y = Math.floor(Math.random() * (renderer.height / 16)) * 16
                            } while ((e.x === powerup.x && e.y === powerup.y) || trail.filter(function(val) {
                                    return e.x === val.x && e.y === val.y
                                })
                                .length > 0 || enemies.filter(function(val) {
                                    return e.x === val.x && e.y === val.y
                                })
                                .length > 1||(function(){
                                    for(i=-2;i<2;i++){
                                        for(j=-2;j<2;j++){
                                            if(e.x === player.x+i*16 && e.y === player.y+j*16) return true
                                        }
                                    }
                                    return false
                                })()
                            )
                            stage.addChild(e)
                        }
                        collide(powerup, player, function() {
                            powerup.ingame = false
                            stage.removeChild(powerup)
                            trail.push(new PIXI.Sprite(shapes.rectangle(16, 16, "#2ecc71")))
                            stage.addChild(trail[trail.length - 1])
                        })
                        enemies.forEach(function(val){
                            collide(val, player, function() {
                                end()
                            })
                        })
                        for (i = trail.length - 1; i > 0; i--) {
                            trail[i].x = trail[i - 1].x
                            trail[i].y = trail[i - 1].y
                        }
                        trail[0].x = player.x
                        trail[0].y = player.y
                        switch (direction) {
                            case 'l':
                                player.x -= 16
                                break;
                            case 'u':
                                player.y -= 16
                                break;
                            case 'r':
                                player.x += 16
                                break;
                            case 'd':
                                player.y += 16
                                break;
                        }
                        trail.forEach(function(val) {
                            collide(val, player, function() {
                                end()
                            })
                        })
                        contain(player, renderer.width, renderer.height, function(handle) {
                            end()
                        })
                        if (frames < 10) {
                            trail.push(new PIXI.Sprite(shapes.rectangle(16, 16, "#2ecc71")))
                            stage.addChild(trail[trail.length - 1])
                        }
                        renderer.render(all)
                    })
            }
        }

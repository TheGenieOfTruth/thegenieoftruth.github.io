module.exports = function (sprite, width, height, callback, extra) {
    if (extra === undefined) {
        extra = {
            "height": 0,
            "width": 0
        };
    }
    var exit = [];
    if (sprite.position.x < -extra.width) {
        exit.push("l");
        exit.push("y");
    }
    if (sprite.position.x > width - extra.width) {
        exit.push("r");
        exit.push("y");
    }
    if (sprite.position.y - sprite.height / 2 < -extra.height) {
        exit.push("u");
        exit.push("y");
    }
    if (sprite.position.y + sprite.width / 2 > height - extra.height) {
        exit.push("d");
        exit.push("y");
    }
    if (exit.length === 0) {
        exit.push("n");
    }

    function handle(code, cb) {
        if (exit.indexOf(code) != -1) {
            cb();
        }
    }
    callback(handle);
};
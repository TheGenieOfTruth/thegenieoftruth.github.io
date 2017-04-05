module.exports = function () {
    var keys = {};
    window.addEventListener("keydown", function (e) {
        keys[e.keyCode] = true;
        switch (e.keyCode) {
            case 37:
            case 39:
            case 38:
            case 40: // Arrow keys
            case 32:
                e.preventDefault();
                break; // Space
            default:
                break; // do not block other keys
        }
    }, false);
    window.addEventListener('keyup', function (e) {
        keys[e.keyCode] = false;
    }, false);
};
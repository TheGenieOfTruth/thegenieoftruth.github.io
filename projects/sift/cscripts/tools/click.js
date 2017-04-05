module.exports = new function () {
    a = this;
    function down() {
        a.clicked = true;
    }
    function up() {
        a.clicked = false;
    }
    this.listen = function (sprite) {
        sprite.on('mousedown', down).on('mouseup', up).on('mouseupoutside', up).on('touchstart', down).on('touchend', up).on('touchendoutside', up);
    };
}();
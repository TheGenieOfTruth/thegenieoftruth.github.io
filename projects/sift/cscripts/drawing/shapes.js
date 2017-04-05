module.exports = new function () {
    var a = this;
    this.renderer = "";
    this.canvas = function (width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        return {
            "canvas": canvas,
            "ctx": ctx
        };
    };
    this.rectangle = function (width, height, color) {
        var b = a.canvas(width, height);
        b.ctx.fillStyle = color;
        b.ctx.fillRect(0, 0, width, height);
        return PIXI.Texture.fromCanvas(b.canvas);
    };
    this.circle = function (radius, color) {
        var b = a.canvas(radius * 2, radius * 2);
        b.ctx.fillStyle = color;
        b.ctx.beginPath();
        b.ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
        b.ctx.fill();
        return PIXI.Texture.fromCanvas(b.canvas);
    };
}();
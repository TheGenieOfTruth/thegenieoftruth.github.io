module.exports = new function () {
    this["3xhex"] = function (frames) {
        return "0123456789abcdef".split("").map(function (val) {
            if (frames % 200 < 50) {
                return "#" + val + val + "0000";
            } else if (frames % 200 < 100) {
                return "#00" + val + val + "00";
            } else if (frames % 200 < 150) {
                return "#0000" + val + val;
            } else {
                return "#" + val + val + val + val + val + val;
            }
        });
    };
    this["rainbow"] = function (frames) {
        f = 0.01;
        function rgbToHex(r, g, b) {
            ra = Math.round;
            return "#" + ((1 << 24) + (ra(r) << 16) + (ra(g) << 8) + ra(b)).toString(16).slice(1);
        }
        return this["10xlight"](rgbToHex(Math.sin(frames * f) * 127 + 128, Math.sin(frames * f + 2) * 127 + 128, Math.sin(frames * f + 4) * 127 + 128));
    };
    this["10xlight"] = function (val) {
        function ColorLuminance(hex, lum) {

            // validate hex string
            hex = String(hex).replace(/[^0-9a-f]/gi, '');
            if (hex.length < 6) {
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            lum = lum || 0;

            // convert to decimal and change luminosity
            var rgb = "#",
                c,
                i;
            for (i = 0; i < 3; i++) {
                c = parseInt(hex.substr(i * 2, 2), 16);
                c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
                rgb += ("00" + c).substr(c.length);
            }

            return rgb;
        }
        var colors = [];
        for (i = -5; i <= 5; i++) {
            for (j = 0; j < Math.pow(5 - Math.abs(i), 2); j++) {
                colors.push(ColorLuminance(val, i / 10));
            }
        }
        return colors;
    };
}();
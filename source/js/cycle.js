var intensity = 0.8
var things = [{
    "name": "Portfolio",
    "lore": "View my",
    "colors": ["#34495e", "#2c3e50"],
    "transparent": ["rgba(52,73,94,0.8)", "rgba(44,62,80,0.8)"]
}, {
    "name": "Blog",
    "lore": "Read the",
    "colors": ["#e67e22", "#d35400"],
    "transparent": ["rgba(230,126,34,0.8)", "rgba(211,84,0,0.8)"]
}, {
    "name": "Games",
    "lore": "Play some",
    "colors": ["#3498db", "#2980b9"],
    "transparent": ["rgba(52,152,219,0.8)", "rgba(41,128,185,0.8)"]
}, {
    "name": "Jokes",
    "lore": "Laugh with some",
    "colors": ["#f1c40f", "#f39c12"],
    "transparent": ["rgba(241,196,15,0.8)", "rgba(243,156,18,0.8)"]
}, {
    "name": "Resources",
    "lore": "Use the",
    "colors": ["#1abc9c", "#16a085"],
    "transparent": ["rgba(26,188,156,0.8)", "rgba(22,160,133,0.8)"]
}, {
    "name": "Credits",
    "lore": "View the",
    "colors": ["#95a5a6", "#7f8c8d"],
    "transparent": ["rgba(149,165,166,0.8)", "rgba(127,140,141,0.8)"]
}]
/*
function h(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + intensity + ')';
    }
    throw new Error('Bad Hex');
}
things.map(function(val) {
    val["transparent"] = [h(val.colors[0]), h(val.colors[1])]
    return val;
})
*/
var inc = 0;

function cycle() {
    inc = (inc + 1) % things.length
    $(".bg-color").css("background", things[inc].colors[0])
    $(".bg-color").hover(function() {
            $(this).css("background", things[inc].colors[1])
        },
        function() {
            $(this).css("background", things[inc].colors[0])
        }
    )
    $(".text-color").css("color", things[inc].colors[0])
    $("#noun").html("<b>" + things[inc].name + "</b>")
    $("#verb").html(things[inc].lore + " ")
    $(".head-gradient-main").css("background", things[inc].transparent[0])


}

$(document).ready(function() {
    cycle()
    setInterval(function() {
        cycle()

    }, 10000)
})

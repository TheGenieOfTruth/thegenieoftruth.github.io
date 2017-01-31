function fade(x, y) {
    setTimeout(function() {
        $(".fade-" + x + "-" + y).fadeIn(x * 1000)
        console.log(".fade-" + x + "-" + y)
    }, y * 1000)
}
$(document).ready(function() {
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            $(".fade-" + i + "-" + j).fadeOut(0)
            fade(i, j)

        }
    }
})

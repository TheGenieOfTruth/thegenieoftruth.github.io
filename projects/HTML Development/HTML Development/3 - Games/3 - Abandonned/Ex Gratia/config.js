/*
-- Config --
Syntax: get(libname)
Libraries:
  - Themes > get("theme-themename")
  Themes include Cerulean, Cosmo, Cyborg, Darkly, Flatly, Journal, Lumen, Paper, Readable, Sandstone, Simplex, Slate, Spacelab, Superhero, United, and Yeti.
  - Bootstrap > get("bootstrap")
  Getting bootstrap also gets JQuery
  - JQuery > get("jquery")
  - Idlekit > get("idlekit")
  - Genescript > get("geniescript")
  - Essentials > get("essentials")
  Includes Flatly, Bootstrap, and JQuery

*/
//Init function; Gets master.js
(function init() {
    var arr = location.pathname.split("/")
    var directoryName = arr
    var full = ""
    var lngth = directoryName.length
    for (i = 0; i < lngth; i++) {
        full += directoryName[i] + "/"
        if (directoryName[i] === "HTML%20Development") {
            i = lngth
        }
    }
    full = full + "master.js"
    document.write("<script src = " + full + "></script>")
    setTimeout(function(){
    /* Code here */
    get("essentials")
    /* Code here */
    },10)}
)()

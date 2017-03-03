document.getElementsByTagName("html")[0].style.display = "none";
(function init() {
    function getScript(src, callback) {
      var s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onreadystatechange = s.onload = function() {
        if (!callback.done && (!s.readyState || /loaded|complete/.test(s.readyState))) {
          callback.done = true;
          callback();
        }
      };
      document.querySelector('head').appendChild(s);
    }
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
    getScript(full,then)
    function then(){
    /* Code here */
    get("essentials")
    finish()
    /* Code here */
    }
})()
window.onload = function(){
    document.getElementsByTagName("html")[0].style.display = "block";
}

module.exports = function (idMessage, value) {
    if (document.getElementById(idMessage) == null) {
        var elem = document.createElement("dbg");
        elem.innerHTML = idMessage + ": <label id = '" + idMessage + "'>" + value + "</label><br>";
        document.getElementsByTagName("body")[0].appendChild(elem);
        return;
    }
    document.getElementById(idMessage).innerHTML = value;
};
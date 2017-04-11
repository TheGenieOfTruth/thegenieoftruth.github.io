
window.onload = function() {

    var messages = [];
    var socket = io.connect(window.location.href);
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");
    var name = document.getElementById("name");
    field.onkeypress = function(event){
        if (event.which == 13 || event.keyCode == 13) {
            sendButton.onclick()
             return false;
        }
        return true;
    }
    socket.on('message', function (data) {
        if(data.message) {
            messages.push(data);
            var html = '';
            for(var i=0; i<messages.length; i++) {
                html += "[" + messages[i].timestamp + "] >> "
                html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
                html += messages[i].message + '<br />';
            }            content.innerHTML = html;
        } else {
            console.log("There is a problem:", data);
        }
        content.scrollTop = content.scrollHeight;
    });

    sendButton.onclick = function() {
        if(name.value == "") {
            alert("Please type your name!");
        } else {
            var text = field.value;
            field.value = ""
            socket.emit('send', { message: text, username: name.value,timestamp:new Date()});
        }
    };

}
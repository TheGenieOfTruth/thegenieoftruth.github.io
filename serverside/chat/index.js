var express = require("express");
var app = express();
var port = 3700;
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.get("/", function(req, res){
    res.render("page");
});
app.get("/", function(req, res){
    res.send("It works!");
});
app.use(express.static(__dirname + '/public'));

var io = require('socket.io').listen(app.listen(port));
io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'Chat server online',timestamp:new Date() });
    socket.on('send', function (data) {
    	data.timestamp = new Date()
        io.sockets.emit('message', data);
        console.log("["+data.timestamp+"] >> "+data.username + ": " + data.message)
    });
});
console.log("Listening on port " + port);

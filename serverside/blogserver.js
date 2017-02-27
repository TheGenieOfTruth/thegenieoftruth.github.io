function timeStamp(){var a=new Date,b=[a.getMonth()+1,a.getDate(),a.getFullYear()],c=[a.getHours(),a.getMinutes()],d=c[0]<12?"AM":"PM";c[0]=c[0]<12?c[0]:c[0]-12,c[0]=c[0]||12;for(var e=1;e<2;e++)c[e]<10&&(c[e]="0"+c[e]);return b.join("/")+", at "+c.join(":")+d}
 var fs = require('fs');
 var prompt = require('prompt');
function readWriteSync(value) {
  var data = JSON.parse(fs.readFileSync('serverside/blog.json', 'utf-8'));
  data[data.length] = value
  var newValue = JSON.stringify(data)
  fs.writeFileSync('serverside/blog.json', newValue, 'utf-8');
}
var port = 8000;
var fs = require("fs")
var express = require("express");
var bodyParser = require("body-parser");
var app = express()
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });
 app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send(JSON.parse(fs.readFileSync('serverside/blog.json', 'utf8')))
})
app.post('/',function(req,res){
  var data = JSON.parse(Object.keys(req.body)[0])
  console.log("Data received")
  data.date = timeStamp()
  readWriteSync(data)
  console.log("Updating blog...")
  var exec = require('child_process').exec;
  exec("gulp")
});
app.listen(8000)
/*
function request(request, response) {
    var store = '';
    request.on('get',function(data){
        return "HEY"
    })
    request.on('data', function(data)
    {
        console.log("Data received")
        data = JSON.parse(data)
        data.date = timeStamp()
        readWriteSync(data)
        console.log("Updating blog...")
        var exec = require('child_process').exec;
        exec("gulp")
    });
    request.on('end', function()
    {
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.end(store)
    });
}*/

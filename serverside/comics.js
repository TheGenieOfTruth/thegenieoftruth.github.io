function timeStamp() {
    var a = new Date,
        b = [a.getMonth() + 1, a.getDate(), a.getFullYear()],
        c = [a.getHours(), a.getMinutes()],
        d = c[0] < 12 ? "AM" : "PM";
    c[0] = c[0] < 12 ? c[0] : c[0] - 12, c[0] = c[0] || 12;
    for (var e = 1; e < 2; e++) c[e] < 10 && (c[e] = "0" + c[e]);
    return b.join("/") + ", at " + c.join(":") + d
}
var fs = require('fs');
var prompt = require('prompt');

function readWriteSync(value) {
    var data = JSON.parse(fs.readFileSync('comics.json', 'utf-8'));
    data[data.length] = value
    var newValue = JSON.stringify(data)
    fs.writeFileSync('comics.json', newValue, 'utf-8');
}
var path = require("path");
var port = 3000;
var fs = require("fs")
var express = require("express");
var bodyParser = require("body-parser");
var app = express()
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null,JSON.parse(fs.readFileSync('comics.json', 'utf-8')).length+path.extname(file.originalname))
  }
});
  var upload = multer({ //multer settings
                    storage: storage
                }).single('file');
app.use(bodyParser.json());
app.get('/', function(req, res) {
    res.send(fs.readFileSync('index.html', 'utf-8'))
})
app.post('/', function(req, res) {
    var data = JSON.parse(fs.readFileSync('comics.json', 'utf-8'))
    console.log("Data received")
    data.date = timeStamp()
    upload(req, res, function(err) {
        if (err) {
            res.json({
                error_code: 1,
                err_desc: err
            });
            return;
        }
        res.json({
            error_code: 0,
            err_desc: null,
            dev_hug:"HEY! YER POST WORKED! :DDDD"
        });
        readWriteSync({
        "title":req.body.title,
        "content":req.body.content,
        "author":req.body.author,
        "date":timeStamp()
    })
    console.log(req.body)
    console.log("Updating comics...")
    var exec = require('child_process').exec;
    exec("gulp comics")
    })
});
app.listen(port)
function timeStamp() {
    var a = new Date,
        b = [a.getMonth() + 1, a.getDate(), a.getFullYear()],
        c = [a.getHours(), a.getMinutes()],
        d = c[0] < 12 ? "AM" : "PM";
    c[0] = c[0] < 12 ? c[0] : c[0] - 12, c[0] = c[0] || 12;
    for (var e = 1; e < 2; e++) c[e] < 10 && (c[e] = "0" + c[e]);
    return b.join("/") + ", at " + c.join(":") + d
} //General function to get the date

function readWriteSync(value) {
    var data = JSON.parse(fs.readFileSync('comics.json', 'utf-8')); //Reads the comics.json file as a string
    data[data.length] = value //adds the value to the end of the comics.json array
    var newValue = JSON.stringify(data) //The new value is the manipulated data, but converted to a string
    fs.writeFileSync('comics.json', newValue, 'utf-8'); //Writes the new value to comics.json
}
var fs = require('fs'); //Requires the "filesystem" module which is used for manipulating files
var path = require("path"); //Used mostly for convenience in uploading
var port = 3000; //The port that the server is hosted on
var express = require("express"); //Magical module that servers for you
var bodyParser = require("body-parser"); //I really have no idea what this does but it reads responses
var app = express(); //Runs the express function to make a new application
var multer = require('multer'); //This tool is used for uploading files
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/') //This will but the file under uploads
  },
  filename: function (req, file, cb) {
    cb(null,JSON.parse(fs.readFileSync('comics.json', 'utf-8')).length+path.extname(file.originalname))
      //This will set the file's name to <current amount of comics>.extension
  }
}); //This is the storage variable, and it tells multer where to put the files
  var upload = multer({ //multer settings
                    storage: storage
                }).single('file'); //MORE MULTER MAGICCC
app.use(bodyParser.json()); //This makes it so the app uses body parser but I still have no idea how it works
//req = request, which is what the client sends
//res = response, which is what the client receives
app.get('/', function(req, res) {
    res.send(fs.readFileSync('index.html', 'utf-8'))
    //Whenever someone attempts to GET from the server (makes a request to the page) it sends them the index file
})
app.post('/', function(req, res) {
    //Whenever someone attempts to POST to the server (sends data to the server) it makes the post
    var data = JSON.parse(fs.readFileSync('comics.json', 'utf-8')) //Reads the comics JSON file as an object
    console.log("Data received") //Yeyyy
    upload(req, res, function(err) { //Uploads a file with multer magic
        if (err) {
            //Responds with JSON if the upload messed up
            res.json({
                error_code: 1,
                err_desc: err
            });
            return;
        }
        //Responds with JSON if the upload works
        res.json({
            error_code: 0,
            err_desc: null,
            dev_hug:"HEY! YER POST WORKED! :DDDD"
        });
        //Writes the data
        readWriteSync({
        "title":req.body.title,
        "content":req.body.content,
        "author":req.body.author,
        "alt":req.body.alt,
        "date":timeStamp()
    })
    console.log(req.body) //Logs the data
    console.log("Updating comics...") //Happiness for uploading
        //GULP CRAPPPP
    var exec = require('child_process').exec;
    exec("gulp comics")
        //GULP CRAP
    })
});
app.listen(port) //Listens for changes

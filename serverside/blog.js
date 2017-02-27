function timeStamp() {
// Create a date object with the current time
  var now = new Date();

// Create an array with the current month, day and time
  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];

// Create an array with the current hour, minute and second
  var time = [ now.getHours(), now.getMinutes() ];

// Determine AM or PM suffix based on the hour
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";

// Convert hour from military time
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

// If hour is 0, set it to 12
  time[0] = time[0] || 12;

// If seconds and minutes are less than 10, add a zero
  for ( var i = 1; i < 2; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }

// Return the formatted string
  return date.join("/") + ", at " + time.join(":") + suffix;
}
  var fs = require('fs');
  var prompt = require('prompt');
function readWriteSync(value) {
  var data = JSON.parse(fs.readFileSync('serverside/blog.json', 'utf-8'));
  console.log("Read: " + data)
  data[data.length] = value
  var newValue = JSON.stringify(data)
  console.log("Write: " + newValue)
  fs.writeFileSync('serverside/blog.json', newValue, 'utf-8');
  //Potato dank
}

  console.log("This is a program to create blog posts with the hot new gulpfile and shiny jade syntax.")
  console.log("Well, actually, this just edits a JSON file, but don't tell my boss.")
  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(['title', 'author','content'], function (err, result) {
    //
    // Log the results.
    //
    readWriteSync({"title":result.title,"author":result.author,"content":result.content,"date": timeStamp()})
  });

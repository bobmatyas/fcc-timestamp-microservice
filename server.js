// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


const isValidDate = (date) => {
  let myDateStr = new Date(date);
  if (!isNaN(myDateStr.getMonth())) {
    return true;
  }
  return false;
}

const dateType = (date) => {
  if (date.includes('-')) {
      return date;
  } else {
      date = Number(date);
      return date;
  }  
}

app.get("/api/timestamp/", function (req, res) {
    let today = new Date();
    let time = today.getTime();
    let dateString = today.toUTCString();
    res.json({unix: time, utc: dateString}); 
});

app.get("/api/timestamp/:date_string", function (req, res) {    
  let dateToParse = dateType(req.params.date_string);
  let date = new Date(dateToParse);  
  if (isValidDate(date) === false) {
    res.json({unix: null, utc: "Invalid Date"});
  } else { 
    let time = date.getTime();
    let dateString = date.toUTCString();
    res.json({unix: time, utc: dateString});
  }
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
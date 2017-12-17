// server.js

// init project
var express = require('express');
var app = express();

//initialize port values
//var port = process.env.PORT || 3000;

//to access style.css
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

//get dateStamp value from browser
app.get('/:dateStamp', function(req, res){
  var dateStamp = req.params.dateStamp; //get parameters from browser
  console.log(dateStamp + " number Entered in Browser");
   
//request year, month and day in natural date
var dateOptions = {
   year: 'numeric',
   month: 'long',
   day: 'numeric'
};
  
//timeZone UTC
//dateOptions.timeZone = 'UTC';

//If it is not a number convert naturalDate and UnixDate return both date formats
      if(isNaN(dateStamp)){
        //convert to naturalDate 
         var naturalDate = new Date(dateStamp);
         naturalDate = naturalDate.toLocaleDateString("en-us", dateOptions);
         
         //convert to unixDate
         var unixDate = new Date(dateStamp).getTime()/1000; //divide in millisecond to convert in unix

      } else { 
   
        //else if unixDate entered in browser, display dateStamp
        var unixDate = dateStamp;
        
        //multiply the unixDate entered in browser by 1000 to convert to naturalDate
        var naturalDate = new Date(dateStamp * 1000); 
        naturalDate = naturalDate.toLocaleDateString("en-us", dateOptions);
      } 
      
      //if natural date is invalid return null
      if(naturalDate === 'Invalid Date'){
         naturalDate = null;
         unixDate = null;
      }
  
//send response as JSON
res.json({unix: unixDate, natural: naturalDate}); 

});//get dateStamp

// listen for requests :)
//app.listen(port, function(){
  // console.log("TimeStamp app is listening on " + port); 
//});
var listener = app.listen(process.env.PORT, function () {
  console.log('TimeStamp app is listening on port ' + listener.address().port);
});

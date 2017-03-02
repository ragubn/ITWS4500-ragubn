
//creating all the vars I will need for my modules
var express = require('express');
var http = require('http');
var Twit = require('twit');
var bodyParser = require('body-parser');
var fs = require('fs');

//path to json file
var path = "ragubnTweets.json";


var urlencodedParser = bodyParser.urlencoded({ extended: false });

//config is where I store my tweet auth keys
var config = require('./config');


var app = express();

//creating server
var server = http.createServer(app);

//seting my views, will be routing
app.set('views','./');


//for twitter call
var T = new Twit(config);

//allow static files
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));
app.use('/static', express.static('public'));


//get index html
app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
});


//express post function which will get data from the client form
//and then maek a twitter get request, then send the data to
//the express router ./json 
app.post('/', urlencodedParser, function(req, res){

  //values from form
  var search = req.body.searchFor;
  var c = req.body.count;

  //setting parameters
  var params = { 
    q: search, 
    count: c 
  }

  //making twitter get request
  T.get('search/tweets', params, gotData); 
  
  //this function is called once we receive the data
  function gotData(err, data, response) {
    console.log(data);
    //sends it to the router ./json
    app.route('/json').get(function(req, res){
      res.send(data);
    });
    //writes to file
    fs.writeFile(path,JSON.stringify(data),function(err){
       if(err) console.error(err);
    });
  };
});



// start server
server.listen(3000);
console.log('Server up on *:3000');


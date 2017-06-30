

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/routes-ajax');
var db = mongoose.connection;


//check connection
db.once('open', function(){
  console.log('Connected to mongoDB ...');
});

// check for db err
db.on('error', function(err){
  console.log(err);
});

// initialiase app
var app = express();

// bring in models
var Listings = require('./models/listing')

// bring in pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// set public folder
app.use(express.static(path.join(__dirname, 'public')));


// home route
app.get('/', function(req, res) {

  Listings.find({ }, function (err, cottages) {

    // var results = [];
    //
    // // get each individual listing
    // for (i = 0; i < cottages.length; i ++) {
    //
    //   var each = cottages[i];
    //
    //     // if individual sleeps < 10
    //
    //     if (each.sleeps < 6 ) {
    //
    //       // push to results arr
    //       results.push(each);
    //
    //     }
    // }

    cottages.reverse();

    console.log(cottages);


    res.render('index', {
      title: 'cottages',
      cottages: cottages
    });

  });
});

// start server
app.listen(3000, function(req, res) {
  console.log('started');
});


//

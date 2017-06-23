
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
var Article = require('./models/article')

// bring in pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// home route
app.get('/', function(req, res) {

  Article.find({  }, function (err, articles) {


    displayContent ();

    function displayContent () {
      res.render('index', {
        title: 'cottages',
        cottages: articles
      });
    }

  });

});

// start server
app.listen(3000, function(req, res) {
  console.log('started');
});


//

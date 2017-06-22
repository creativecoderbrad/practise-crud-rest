
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();


// bring in pug

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// home route
app.get('/', function(req, res) {

  var places = [
    {
      id: 1,
      name: 'coastal grove',
      loc: 'devon',
      price: 499.00,
      sleep: 5
    },
    {
      id: 2,
      name: 'harbour point',
      loc: 'cornwall',
      price: 750.00,
      sleep: 3
    },
    {
      id: 3,
      name: 'sunrise place',
      loc: 'cornwall',
      price: 550.00,
      sleep: 4
    }
  ];

  res.render('index', {
    title: 'cottages',
    cottages: places
  });
})



// start server
app.listen(3000, function(req, res) {
  console.log('started');
});

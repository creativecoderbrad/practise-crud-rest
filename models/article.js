
const mongoose = require('mongoose');

// article schema

var articleSchema = mongoose.Schema({

 name: {
   type: String,
   required: true
 },
 loc: {
   type: String,
   required: true
 },
 price: {
   type: Number,
   required: true
 },
 sleeps: {
   type: Number,
   required: true
 }
});

//

var Article = module.exports = mongoose.model('Article', articleSchema);

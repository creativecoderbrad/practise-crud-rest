const mongoose = require('mongoose');

// listing schema

var listingSchema = mongoose.Schema({

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

var Listings = module.exports = mongoose.model('Listings', listingSchema);

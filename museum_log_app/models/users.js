var mongoose = require('mongoose');
var museumSchema = require('./museums').schema;

var userSchema = mongoose.Schema({
	name: String,
	age: Number,
	city: String,
	museum: [museumSchema]

});

module.exports= mongoose.model('User', userSchema);
var mongoose = require('mongoose');

var museumSchema = mongoose.Schema({
	name: String,
	address: String,
	img: String,
	history: String
})

module.exports = mongoose.model('Museum', museumSchema);
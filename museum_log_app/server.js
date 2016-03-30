//REQUIREMENTS
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/museum_app');

// MIDDLEWARE 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

var usersController = require('./controllers/usersController');
app.use('/users', usersController);

var museumsController = require('./controllers/museumsController');
app.use('/museums', museumsController);


//Test ROUTE
app.get('/test', function(req, res){
	res.send('TEST, TEST')
});


// LISTENER
app.listen(port, function() {
	console.log('LISTENING ON PORT: ' + port)
});

//REQUIREMENTS
var express = require('express'),
    router = express.Router();

var User = require('../models/users');

router.get('/', function(req, res) {
	User.find(function(err, user) {
		res.send(user);
	});
});

router.post('/', function(req, res) {
	User.create(req.body, function(err, user) {
		res.send(user);
	});
});

router.get('/seed', function(req, res) {

	var users = [
		{ name: 'Jen', age: 24, city: 'New York City'},
		{ name: 'Mary', age: 20, city: 'New York City'},
		{ name: 'Jack', age: 30, city: 'New York City'},
	];

	User.create(users, function(err, users) {
		res.redirect('/');
	});

});


module.exports = router;
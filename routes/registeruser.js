var express = require('express');
var router = express.Router();

/* Get Data. */
router.all('/', function(req, res, next) {
	var name = req.param('name');
	var username = req.param('username');
	var password = req.param('password');
	var email = req.param('email');
	var phonenumber = req.param('phonenumber');
	var cityname = req.param('cityname');
	var db = req.db;
	var collection = db.get('userdata');
	// Insert Data
	collection.insert({
		'name': name,
		'username': username,
		'password': password,
		'email': email,
		'phonenumber': phonenumber,
		'cityname': cityname
	}, function() {
		res.send({ 'STATUS':'ok' });
	});

});

module.exports = router;

var express = require('express');
var router = express.Router();

/* Get Data. */
router.all('/', function(req, res, next) {
	var username = req.param('username');
	var password = req.param('password');
	var db = req.db;
	var collection = db.get('userdata');
	// Insert Data
	collection.find({ 'username': username }, function(e, data) {
		if (data[0].password === password) {
			req.session.username = username;
			res.send({ 'STATUS':'ok', 'redirectURL': '/ebook' });
		}

		else {
			res.send({ 'STATUS':'invalid' });
		}
	});


});

module.exports = router;
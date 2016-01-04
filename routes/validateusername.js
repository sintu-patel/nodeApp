var express = require('express');
var router = express.Router();

/* Get Data. */
router.all('/', function(req, res, next) {
	var username = req.param('username');
	var db = req.db;
	var collection = db.get('userdata');
	// Insert Data
	collection.find({ 'username': username }, function(e, data) {
		if (data.length) {
			res.send({ 'STATUS':'valid' });
		}

		else {
			res.send({ 'STATUS':'invalid' });
		}
	});


});

module.exports = router;

var express = require('express');
var router = express.Router();

/* Get Data. */
router.all('/', function(req, res, next) {
	var username = req.param('username');
	var password = req.param('password');
	var db = req.db;
	var collection = db.get('userdata');

	collection.find({ 'username': username }, function(e, data) {
		if (data.length) {
			if (data[0].password === password) {
				req.session.username = username;
				res.send({ 'STATUS':'ok', 'redirectURL': '/ebook' });
				collection.update({ 'username': username }, { $set: { 'active': 'yes' }});
			}

			else {
				res.send({ 'STATUS':'invalid' });
			}

		}

		else {
			res.send({ 'STATUS':'invalid' });
		}
	});


});

module.exports = router;

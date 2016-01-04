var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.session.username) {
		var obj;
		fs.readFile('./data/data.json', 'utf8', function(err, data) {
			if (err) {
				throw err;
			}
			obj = JSON.parse(data);
			res.render('index', obj);
		});
	}

	else {
		res.redirect('/login');
	}
});

module.exports = router;

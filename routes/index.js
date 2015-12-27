var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	var obj;
	fs.readFile('./data/data.json', 'utf8', function(err, data) {
		if (err) {
			throw err;
		}
		obj = JSON.parse(data);
		res.render('index', obj);
	});
});

module.exports = router;

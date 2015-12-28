var express = require('express');
var router = express.Router();

/* Get Data. */
router.all('/', function(req, res, next) {
	var pageTitle = req.param('pageTitle');
	var img = req.param('img');
	var content = req.param('content');
	var pageNo = req.param('pageNo');
	var db = req.db;
	var collection = db.get('book');
	collection.insert({
		'pageTitle': pageTitle,
		'img': img,
		'content': content,
		'pageNo': pageNo
	}, function() {
		collection.count({}, function(e, totalCount) {
			res.send({ 'STATUS':'ok', 'totalCount': totalCount });
		});
	});

});

module.exports = router;

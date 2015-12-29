var express = require('express');
var router = express.Router();

/* Get Data. */
router.all('/', function(req, res, next) {
	var queryType = req.param('queryType');
	var pageTitle = req.param('pageTitle');
	var img = req.param('img');
	var content = req.param('content');
	var pageNo = req.param('pageNo');
	var db = req.db;
	var collection = db.get('book');
	pageNo = parseInt(pageNo, 10);

	// Insert Data
	if (queryType === 'insert') {
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
	}

	else if (queryType === 'update') {
		collection.update({ 'pageNo': pageNo }, { $set: {
			'img': img,
			'content': content,
			'pageTitle': pageTitle
		}}, function() {
			collection.count({}, function(e, totalCount) {
				res.send({ 'STATUS':'ok', 'totalCount': totalCount });
			});
		});
	}

});

module.exports = router;

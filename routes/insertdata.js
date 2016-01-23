var express = require('express');
var router = express.Router();

/* Get Data. */
router.all('/', function(req, res, next) {
	if (req.session.username) {
		var queryType = req.param('queryType');
		var pageTitle = req.param('pageTitle');
		var keyPoints = req.param('keyPoints');
		var content = req.param('content');
		var pageNo = req.param('pageNo');
		var db = req.db;
		var userDataTable = req.session.username + '_table';
		var collection = db.get(userDataTable);
		pageNo = parseInt(pageNo, 10);

		// Insert Data
		if (queryType === 'insert') {
			collection.insert({
				'pageTitle': pageTitle,
				'keyPoints': keyPoints,
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
				'keyPoints': keyPoints,
				'content': content,
				'pageTitle': pageTitle
			}}, function() {
				collection.count({}, function(e, totalCount) {
					res.send({ 'STATUS':'ok', 'totalCount': totalCount });
				});
			});
		}
	}

	else {
		res.redirect('/login');
	}

});

module.exports = router;

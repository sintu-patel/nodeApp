var express = require('express');
var router = express.Router();

/* Get Data. */
router.get('/', function(req, res, next) {
	var pageNo;
	pageNo = req.param('pageNo');
	if (pageNo === undefined || pageNo === '0' || pageNo === '7') {
		pageNo = '1';
	}
	var db = req.db;
	var collection = db.get('book');
	collection.find({
		'pageNo': pageNo
	}, function(e, appData) {
		res.json(appData);
	});

});

module.exports = router;

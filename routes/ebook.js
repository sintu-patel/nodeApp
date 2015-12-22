var express = require('express');
var router = express.Router();

/* Get Data. */
router.get('/', function(req, res, next) {
	var pageNo;
	pageNo = req.param('pageNo');
	if (pageNo == undefined) {
		pageNo = '1';
	}
	var cPage = parseInt(pageNo);
	var db = req.db;
	var collection = db.get('book');
	collection.find({
		'pageNo': pageNo
	}, function(e, appData) {
		res.render('ebook', {
			'cPage': cPage,
			'ebookData': appData
		});
	});

});

module.exports = router;

var express = require('express');
var router = express.Router();

/* Get Data. */
router.get('/', function(req, res, next) {
	var pageNo = 1;
	if (req.param('pageNo')) {
		pageNo = req.param('pageNo');
	}
	var cPage = parseInt(pageNo);
	var db = req.db;
	var collection = db.get('book');
	collection.find({
		'pageNo': pageNo
	}, function(e, appData) {
		res.render('ebook', {
			"ebookData": appData
		});
	});

});

module.exports = router;

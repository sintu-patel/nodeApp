var express = require('express');
var router = express.Router();
/* Get Data. */
router.get('/', function(req, res, next) {
	if (req.session.username) {
		var db = req.db;
		var collection = db.get('book');
		collection.count({}, function(e, totalCount) {
			collection.find({}, function(e, appData) {
				res.render('ebook', { 'appData': appData, 'totalPages': totalCount, 'sessionuser': req.session.username });
			});
		});
	}

	else {
		res.redirect('/login');
	}
});

module.exports = router;

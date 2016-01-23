var express = require('express');
var router = express.Router();
/* Get Data. */
router.get('/', function(req, res, next) {
	if (req.session.username) {
		var db = req.db;
		var userDataTable = req.session.username + '_table';
		var collection = db.get(userDataTable);
		collection.count({}, function(e, totalCount) {
			collection.find({}, function(e, appData) {
				res.render('addpage', { 'totalPages': totalCount , 'sessionuser': req.session.username });
			});
		});
	}

	else {
		res.redirect('/login');
	}
});

module.exports = router;

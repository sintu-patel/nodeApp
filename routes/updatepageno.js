var express = require('express');
var router = express.Router();

/* Get Data. */
router.all('/', function(req, res, next) {
	if (req.session.username) {
		var oldpagetitle = req.param('oldpagetitle');
		var newpage = req.param('newpageno');
		newpage = parseInt(newpage, 10);
		var pageNo = req.param('pageNo');
		var db = req.db;
		var userDataTable = req.session.username + '_table';
		var collection = db.get(userDataTable);

		// update data
		collection.update({ 'pageTitle': oldpagetitle }, { $set: {
			'pageNo': newpage
		}}, function() {
			collection.count({}, function(e, totalCount) {
				res.send({ 'STATUS':'ok', 'totalCount': totalCount });
			});
		});
	}

	else {
		res.redirect('/login');
	}

});

module.exports = router;

var express = require('express');
var router = express.Router();

/* Get Data. */
router.get('/', function(req, res, next) {
	if (req.session.username) {
		var pageNo;
		pageNo = req.param('pageNo');
		pageNo = parseInt(pageNo, 10);
		if (pageNo === undefined || pageNo === '0' || pageNo === '7') {
			pageNo = 1;
		}
		var db = req.db;
		var userDataTable = req.session.username + '_table';
		var collection = db.get(userDataTable);
		collection.find({
			'pageNo': pageNo
		}, function(e, appData) {
			res.json(appData);
		});
	}

	else {
		res.redirect('/login');
	}

});

module.exports = router;

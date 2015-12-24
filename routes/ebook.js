var express = require('express');
var router = express.Router();

/* Get Data. */
router.get('/', function(req, res, next) {
	var db = req.db;
	var collection = db.get('book');
	collection.find({}, function(e, appData) {
		res.render('ebook', {'appData': appData});
	});
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* Get Data. */
router.get('/', function(req, res, next) {
	var db = req.db;
	var collection = db.get('appT');
	collection.find({}, function(e, appData) {
		// res.json({"ebookData": appData});
		res.render('ebook', {"ebookData": appData});
	});

});

module.exports = router;

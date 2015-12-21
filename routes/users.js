var express = require('express');
var router = express.Router();

/* Get Data. */
router.get('/', function(req, res, next) {
	var db = req.db;
	var collection = db.get('ebookData');
	console.log(collection);
	collection.find({"title" : "Hello introduction"}, function(e, docs) {
		console.log(docs);
		res.json(docs);
	});

});

module.exports = router;

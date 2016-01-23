var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
	var db = req.db;
	var collection = db.get('userdata');
	var username = req.session.username;
	collection.update({ 'username': username }, { $set: { 'active': 'no' }}, function () {
		req.session.destroy();
		res.render('logout');
	});

});

module.exports = router;

var express = require('express');
var router = express.Router();
/* Get Data. */
router.get('/', function(req, res, next) {
	res.render('updatepage');
});

module.exports = router;

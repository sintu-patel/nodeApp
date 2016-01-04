var express = require('express');
var router = express.Router();
/* Get Data. */
router.get('/', function(req, res, next) {
	if (req.session.username) {
		res.render('updatepage');
	}

	else {
		res.redirect('/login');
	}
});

module.exports = router;

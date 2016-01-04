var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var ebook = require('./routes/ebook');
var getpage = require('./routes/getpage');
var addpage = require('./routes/addpage');
var insertdata = require('./routes/insertdata');
var updatepage = require('./routes/updatepage');
var login = require('./routes/login');
var registeruser = require('./routes/registeruser');
var validatelogin = require('./routes/validatelogin');

var app = express();

// New Code for mongoDB
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/ebook');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req, res, next) {
	req.db = db;
	 next();
});

app.use('/', ebook);
app.use('/ebook', ebook);
app.use('/getpage', getpage);
app.use('/addpage', addpage);
app.use('/insertdata', insertdata);
app.use('/updatepage', updatepage);
app.use('/login', login);
app.use('/registeruser', registeruser);
app.use('/validatelogin', validatelogin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;

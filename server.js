var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path')

app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	var obj;
	fs.readFile('./data/data.json', 'utf8', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
  		res.render('index', obj);
  		// res.json(obj);
	});
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})

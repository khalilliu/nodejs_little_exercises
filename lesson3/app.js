var express = require('express');
var util = require('utility');

var app = express();

app.get('/name/:name',function(req,res){
	var q = req.params.name;
	console.log(req.query)
	var md5Value = util.md5(q);

	res.send(md5Value);
})

app.listen(3000, function(req,res){
	console.log('app is running at port 3000')
})
var express = require('express');
var app = express();
var server = require('http').createServer(app);

var port =  Number(process.env.PORT || 8000)
server.listen(port);
console.log('listening on port 8000');

app.get('/', function(req,res){
	res.sendfile(__dirname + '/index.html');
});

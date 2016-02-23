var express = require('express');
var app = express();
var server = require('http').createServer(app);


app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

// require('./assets/css/main.css');
app.use(express.static('assets'));

var port =  Number(process.env.PORT || 8000)
server.listen(port);
console.log('listening on port 8000');

// app.get('/', function(req,res){
// 	res.sendFile(__dirname + '/index.html');
// });

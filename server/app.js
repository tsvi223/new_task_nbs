var express = require("express");
var path = require("path");

var port =   '7271';
var app = express();
var http = require('http').createServer(app);
console.log('here');

app.use('/app', express.static(path.join(__dirname, '../app')))
console.log(path.join(__dirname, '../app'));
app.use('/assets', express.static(path.join(__dirname, '../assets')))

require('./route')(app);


http.listen(port ,function(){
    console.log('Starting Web Server on Port   ' + port );
});

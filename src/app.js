'use strict';

var express = require('express');
var parser = require('body-parser');

var http = require('http');

var app = express();



app.use('/', express.static('public'));
app.use('/challenges', express.static('public/challenges.html'));
app.use('/action', express.static('public/action.html'));
app.use('/references', express.static('public/references.html'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));



var server = http.createServer(app);

app.listen(process.env.PORT || 8080, () =>  {
	console.log("Server is running on port 8080!");
});
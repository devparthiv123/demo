var express = require('express');
var app = express();

var user = require('../controller/cgp/cgp.post');
var post = require('../controller/cgp/cgp.get');

app.get('/users', post.getOne);
app.post('/user/create', user.stu);

module.exports
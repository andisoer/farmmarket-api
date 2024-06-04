var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vegetablesRouter = require('./routes/vegetables');
var articleRouter = require('./routes/article');
var benefitRouter = require('./routes/benefit');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/vegetables', vegetablesRouter);
app.use('/articles', articleRouter);
app.use('/benefits', benefitRouter);

module.exports = app;

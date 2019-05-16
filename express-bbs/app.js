const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');

const connect = require('./db/mongoConnect');

const indexRouter = require('./routes/index');
const articleRouter = require('./routes/articles');

const app = express();

// 몽구스에서 몽고디비와 커넥션 설정ss
connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/articles', articleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

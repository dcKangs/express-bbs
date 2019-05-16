const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index.js');
const articleRouter = require('./routes/article.js');
const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));    // static 미들웨어는 보통 morgan 다음에 배치
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use('/', indexRouter);
app.use('/articles', articleRouter);
//app.use('/users', userRouter);

app.use( (req, res, next) => {
    console.log('404 NOT Found');
    //next(createError(404));
    next();
});

app.use( (err, req, res, next) => {   
    res.send('요청된 URL이 잘못되었습니다.' + err.message);
});

app.listen(3000, () => {
    console.log('server ready on port 3000')
});
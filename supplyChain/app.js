var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/api/index');
var farmerRouter = require('./routes/api/farmer');
var inspectorRouter = require('./routes/api/inspector');
var processAgentRouter = require('./routes/api/processAgent');
var retailAgentRouter = require('./routes/api/retailAgent')

var app = express();


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/supplyChain', { useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('MongoDB connection succeded.');
    else
        console.log('Error in DB connection:' + JSON.stringify(err, undefined, 2));
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/farmer', farmerRouter);
app.use('/inspector', inspectorRouter);
app.use('/processAgent', processAgentRouter);
app.use('/retailAgent', retailAgentRouter);

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
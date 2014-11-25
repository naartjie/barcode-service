'use strict';

var config = require('./'),
    logger = require('morgan'),
    express = require('express');

var app = module.exports = express();

app.use(logger('dev'));

require('./routes')(app);

app.start = function(cb) {
    var server = app.listen(config.port, function () {
        cb(config.env(), server.address().port);
    });
};

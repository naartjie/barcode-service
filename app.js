'use strict';

var app = require('./config/express');

app.start(function(env, port) {
    console.log('[%s]:%d Barcode service started', env, port);
});

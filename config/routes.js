'use strict';

var bwip = require('bwip');

var Barc = require('barcode-generator'),
    barc = new Barc({hri: false});

module.exports = function(app) {

    app.get('/code128/(:width)x(:height)/:code', function(req, res) {

        var code = req.params.code,
            width = req.params.width,
            height = req.params.height;

        var buf = barc.code128(code, width, height);

        console.log(buf.length);

        res
            .status(200)
            .set({ 'Content-Type':'image/png' })
            .send(buf);
    });
};

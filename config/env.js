'use strict';

var port = process.env.PORT;

module.exports = {

    defaults: {
        port: port || 3000,
    },

    production: {
        port: port || 3005,
    },
};

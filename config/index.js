'use strict';

var _ = require('lodash'),
    envs = require('./env'),
    ENV = process.env.NODE_ENV || 'development';

function env(cmp) {
    if (!cmp) return ENV;
    return cmp === ENV || (cmp === 'dev' && ENV === 'development');
}

module.exports = _.merge({env: env}, envs.defaults, envs[ENV]);

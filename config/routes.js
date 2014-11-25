'use strict';

module.exports = function(app) {

    app.get('/:type/:dimensions/:code', function(req, res) {
        res.send('todo');
    });

};

'use strict';

module.exports = {
    path: '/home/*',
    getComponent: function getComponent(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('./components/FileList'));
        });
    }
};
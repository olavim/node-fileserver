'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (dir, callback) {
    var files = _fs2.default.readdir(dir, function (err, files) {
        if (err) {
            return callback(err);
        }

        var filedata = [];

        files.forEach(function (file, index) {
            filedata.push({
                name: file,
                type: getFileType(dir, file)
            });
        });

        callback(null, {
            files: filedata
        });
    });
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _filetypeConstants = require('../constants/filetypeConstants');

var _filetypeConstants2 = _interopRequireDefault(_filetypeConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
function getFileExtension(file) {
    return file.substr(file.lastIndexOf('.', file) + 1);
}

// Returns a directory tree object from the provided path.


function getFileType(dir, file) {
    var stats = _fs2.default.lstatSync(_path2.default.join(dir, file));
    if (stats.isDirectory()) {
        return _filetypeConstants2.default.DIRECTORY;
    }

    var ext = getFileExtension(file).toLowerCase();
    return _filetypeConstants2.default.getByExtension(ext);
}

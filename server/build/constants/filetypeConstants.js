'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    DIRECTORY: 'directory',
    OTHER: 'other',

    getByExtension: function getByExtension(ext) {
        for (var i = 0; i < filetypes.length; i++) {
            for (var j = 0; j < filetypes[i].exts.length; j++) {
                if (filetypes[i].exts[j] === ext) return filetypes[i].name;
            }
        }return this.OTHER;
    }
};


var filetypes = [{
    name: 'javascript',
    exts: ['js']
}, {
    name: 'html',
    exts: ['html', 'htm']
}];

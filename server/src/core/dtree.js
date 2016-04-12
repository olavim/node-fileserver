import fs from 'fs';
import path from 'path';
import filetype from '../constants/filetypeConstants';

// Returns a directory tree object from the provided path.
export default function(dir, callback) {
    let files = fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err);
        }

        let filedata = [];

        files.forEach((file, index) => {
            filedata.push({
                name: file,
                type: getFileType(dir, file)
            });
        });

        callback(null, {
            files: filedata
        });
    });
}
//
function getFileExtension(file) {
    return file.substr(file.lastIndexOf('.', file) + 1);
}

function getFileType(dir, file) {
    let stats = fs.lstatSync(path.join(dir, file));
    if (stats.isDirectory()) {
        return filetype.DIRECTORY;
    }

    let ext = getFileExtension(file).toLowerCase();
    return filetype.getByExtension(ext);
}
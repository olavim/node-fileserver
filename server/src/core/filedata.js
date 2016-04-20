import fs from 'fs';
import { getFileExtension } from '../tools/file';

module.exports = function(root, filepath) {
	return new Promise((resolve, reject) => {
		filepath = root + filepath;
		fs.readFile(filepath, { encoding: 'UTF-8' }, (err, data) => {
			if (err)
				reject(err);
			else
				resolve({filetype: getFileExtension(filepath), data});
		});
	});
}
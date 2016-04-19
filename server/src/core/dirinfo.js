import fs from 'fs';
import * as fl from '../tools/file';
import path from 'path';

// Returns a directory tree object from the provided path.
module.exports = function(root, dir) {
	return new Promise((resolve, reject) => {
		let dirPath = root + dir;
		
		const createFileData = (name, files) => {
			return {
				name,
				path: path.join(dir, name || ''),
				filetype: fl.getFileType(dirPath, name),
				modified: fl.getFileModified(dirPath, name),
				files
			}
		}
		
		let fileType = fl.getFileType(dirPath);
		
		let files = fs.readdir(dirPath, (err, files) => {
			if (err)
				return reject(err);
			
			let filedata = files.map(file => createFileData(file));
			resolve(createFileData(undefined, filedata));
		});
	});
}
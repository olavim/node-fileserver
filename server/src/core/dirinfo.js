import fs from 'fs';
import * as fl from '../tools/file';
import path from 'path';

// Returns a directory tree object from the provided path.
module.exports = function(sharePath, dir) {
	return new Promise((resolve, reject) => {
		let fullPath = sharePath + dir;
		
		const createFileData = (name, files) => {
			return {
				name,
				path: path.join(dir, name || ''),
				filetype: fl.getFileType(fullPath, name),
				modified: fl.getFileModified(fullPath, name),
				files
			}
		}
		
		let fileType = fl.getFileType(fullPath);
		
		let files = fs.readdir(fullPath, (err, files) => {
			if (err)
				return reject(err);
			
			let filedata = files.map(file => createFileData(file));
			resolve(createFileData(undefined, filedata));
		});
	});
}
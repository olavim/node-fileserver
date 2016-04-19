import fs from 'fs';

module.exports = function(root, filepath) {
	return new Promise((resolve, reject) => {
		filepath = root + filepath;
		fs.readFile(filepath, { encoding: 'UTF-8' }, (err, data) => {
			if (err)
				reject(err);
			else
				resolve({data});
		});
	});
}
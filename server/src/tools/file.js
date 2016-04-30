import fs from 'fs';
import filetype from '../constants/filetypeConstants';
import path from 'path';

export const getFileExtension = file => {
	return file.substr(file.lastIndexOf('.', file) + 1);
}

export const getFileType = (dir, file = '') => {
	let stats = fs.lstatSync(path.join(dir, file));
	return stats.isDirectory() ? filetype.DIRECTORY : getFileExtension(file);
}

export const getFileModified = (dir, file = '') => {
	let stats = fs.lstatSync(path.join(dir, file));
	return stats.mtime;
}

export const mkdir = (root, name) => {
	return new Promise((resolve, reject) => {
		let newPath = path.join(root, name);
		if (!pathExists(root))
			reject(new Error("Path doesn't exist: " + root));

		if (pathExists(newPath))
			reject(new Error("Directory exists: " + name));

		fs.mkdir(newPath, err => {
			if (err) 
				reject(err);
			resolve();
		})
	})
}

export const isValidFilename = name => {
	let p1 = /^[^\/\\*"?\[\]:;|=,]*$/;  // illegal characters
	let p2 = /^(?!\.{1,2}$).*/;			// do not match . or ..
	return p1.test(name) && p2.test(name);
}

const pathExists = path => {
	try {
		fs.statSync(path);
		return true;
	} catch(err) {
		return false;
	}
}
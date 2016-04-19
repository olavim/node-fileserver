import fs from 'fs';
import filetype from '../constants/filetypeConstants';
import path from 'path';

export const getFileExtension = file => {
	return file.substr(file.lastIndexOf('.', file) + 1);
}

export const getFileType = (dir, file = '') => {
	let stats = fs.lstatSync(path.join(dir, file));
	if (stats.isDirectory()) {
		return filetype.DIRECTORY;
	}
	
	let ext = getFileExtension(file).toLowerCase();
	return filetype.getByExtension(ext);
}

export const getFileModified = (dir, file = '') => {
	let stats = fs.lstatSync(path.join(dir, file));
	return stats.mtime;
}
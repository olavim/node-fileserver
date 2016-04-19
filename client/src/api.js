import axios from 'axios';
import config from '../config';
import path from 'path';

export default {
	fetchFiles: (dir) => {
		return axios.get(getFileUrl(dir));
	},

	loadFileData: (path) => {
		return axios.get(getFileUrl(path) + '?load=data');
	}
}

function getFileUrl(dir) {
	dir = dir.replace(/^\/home/, '');
	return config.apiUrl + path.join('files', dir);
}
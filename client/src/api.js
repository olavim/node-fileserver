import path from 'path';
import axios from 'axios';
import config from '../config';

export default {
	fetchFileData: dir => {
		return axios.get(getFileUrl(dir));
	},
	newDirectory: (currentDir, name) => {
		return axios.post(`${getFileUrl(currentDir)}?dir=${name}`);
	}
}

function getFileUrl(dir) {
	dir = dir.replace(/^\/home/, '');
	return config.apiUrl + path.join('files', dir);
}

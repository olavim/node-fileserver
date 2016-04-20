import axios from 'axios';
import config from '../config';
import path from 'path';

export default {
	fetchFileData: (dir) => {
		return axios.get(getFileUrl(dir));
	},
}

function getFileUrl(dir) {
	dir = dir.replace(/^\/home/, '');
	return config.apiUrl + path.join('files', dir);
}
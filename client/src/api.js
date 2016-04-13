import axios from 'axios';
import config from '../config';
import path from 'path';

export default {
	fetchFiles: (dir) => {
		return axios.get(getFileUrl(dir));
	}
}

function getFileUrl(dir) {
	return config.apiUrl + path.join('files', dir);
}
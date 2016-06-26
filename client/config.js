const port_prod = 8080;
const port_dev = 8888;
const apiUrl_prod = 'http://tilastojakelu.net:3000/';
const apiUrl_dev = 'http://localhost:3000/';

module.exports = {
	webDir: __dirname + '/web',
	port: process.env.NODE_ENV !== 'production' ? port_dev : port_prod,
	apiUrl: process.env.NODE_ENV !== 'production' ? apiUrl_dev : apiUrl_prod
}
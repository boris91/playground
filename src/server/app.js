import https from 'https';
import config from './config';
import app from './webpack-server';

app.use('/cpu', (req, res) => {
	let options = {
		host: 'catalog.api.onliner.by',
		path: '/facets/cpu',
		method: 'GET',
		headers: { 'Accept': 'application/json' }
	};
	let xhr = https.request(options, xhrRes => {
		let page = '';
		//xhrRes.setEncoding('utf8');
		xhrRes.on('data', chunk => page += chunk);
		xhrRes.on('end', () => res.write(page));
	});
	xhr.write('');
	xhr.end();
});

app.listen(config.PORT, config.HOST);
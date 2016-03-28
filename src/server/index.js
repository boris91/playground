import https  from 'https';
import config from './config';
import server from './server';
import routes from './routes';

for (let path in routes) {
	server.use(path, routes[path]);
}

server.listen(config.PORT, config.HOST);
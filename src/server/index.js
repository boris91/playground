import https  from 'https';
import config from './config';
import server from './server';

server.listen(config.PORT, config.HOST);
import https from 'https';
import config from './config';
import app from './webpack-server';

app.listen(config.PORT, config.HOST);
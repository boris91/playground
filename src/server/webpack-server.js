import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../../webpack.config';

const wpServerConfig = webpackConfig.devServer;
const HOST = wpServerConfig.host;
const PORT = wpServerConfig.port;

/**
 * inline mode for webpack-dev-server
 **/
(() => {
	let inlineProp = `webpack-dev-server/client?http://${HOST}:${PORT}/`;
	let entries = webpackConfig.entry;
	for (let key in entries) {
		entries[key].unshift(inlineProp);
	}
})();

const webpackServer = new WebpackDevServer(webpack(webpackConfig), wpServerConfig);

export {
	webpackServer,
	HOST,
	PORT
};
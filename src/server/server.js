import config           from './config';
import webpack          from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig    from '../../webpack.config';

/**
 * inline mode for webpack-dev-server
 */
const INLINE_PROP = `webpack-dev-server/client?http://${config.HOST}:${config.PORT}/`;
let entries = webpackConfig.entry;
for (let key in entries) {
	entries[key].unshift(INLINE_PROP);
}

export default new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer);
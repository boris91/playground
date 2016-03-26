import Path               from 'path';
import AutoprefixerStylus from 'autoprefixer-stylus';

const RESOLVED_ROOT_PATH = Path.resolve(process.cwd(), 'src/client');
const CLIENT_SRC_PATH = [RESOLVED_ROOT_PATH];

export default {
	devServer: {
		stats: { colors: true },
		contentBase: __dirname + '/dst/'
	},
	entry: {
		app: [
			'babel-polyfill',
			'./src/client/app/index'
		]
	},
	output: {
		path: __dirname + '/dst/',
		publicPath: '',
		filename: '[name]-bundle.js'
	},
	module: {
		loaders: [{
			test: /\.(html|ico)$/,
			include: CLIENT_SRC_PATH,
			loader: 'file',
			query: { name: '[name].[ext]' }
		}, {
			test: /\.js$/,
			include: CLIENT_SRC_PATH,
			loader: 'babel',
			query: { presets: ['es2015', 'react'] }
		}, {
			test: /\.styl$/,
			include: CLIENT_SRC_PATH,
			loader: 'style!css!stylus'
		}, {
			test: /\.(png|jpg|gif)$/,
			include: CLIENT_SRC_PATH,
			loader: 'file',
			query: { name: '[hash].[ext]' }
		}]
	},
	resolve: {
		root: RESOLVED_ROOT_PATH,
		extension: ['', '.js'],
		modulesDirectories: ['node_modules']
	},
	stylus: {
		use: [AutoprefixerStylus({ browsers: ['last 2 versions'] })]
	}
};
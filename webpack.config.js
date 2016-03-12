const Path = require('path');
//const  HtmlWebpackPlugin = require('html-webpack-plugin');
const AutoprefixerStylus = require('autoprefixer-stylus');

const CLIENT_SRC_PATH = [Path.resolve(process.cwd(), 'src/client')];

module.exports = {
	entry: {
		app: [
			'babel-polyfill',
			'./src/client/app/app'
		]
	},
	output: {
		path: './dst',
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
		extension: ['', '.js'],
		modulesDirectories: ['node_modules']
	},
	stylus: {
		use: [AutoprefixerStylus({ browsers: ['last 2 versions'] })]
	}
};
var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, 'src') + '/index.jsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};
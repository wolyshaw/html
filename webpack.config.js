var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('./config')

module.exports = {
  entry: './index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
		template: './index_default.html',
		title: config.title
	})]
}

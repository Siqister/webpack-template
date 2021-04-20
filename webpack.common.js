//run webpack-dev-server --content-base dist
//https://webpack.github.io/docs/configuration.html
const path = require('path');

module.exports = {
	entry:[
		'./src/index.js',
		'./src/index.html'
	],
	output:{
		path: path.resolve(__dirname,'dist'),
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				test: /\.jsx?$/,
				include: path.resolve(__dirname,'src'),
				use: {
					loader:'babel-loader'
				}
			},
			{ 
				test: /\.css$/, 
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			},
     	{
     		test: /\.(png|svg|jpg|gif)$/,
     		type: 'asset/resource'
     	},
     	{
     		test: /\.html$/,
     		use: {
     			loader: 'file-loader',
     			options:{
     				name: '[name].[ext]'
     			}
     		}
     	}
		]
	}
}
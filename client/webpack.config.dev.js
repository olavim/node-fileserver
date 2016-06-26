var path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
	      'babel-polyfill',
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        filename: "bundle.js",
        path: __dirname + "/web",
        publicPath: "/scripts/"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /bower_components/],
                query: {
                    presets: ['es2015', 'stage-1', 'babel-preset-react']
                }
            },
            {
                test: /\.scss/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
			{
				test: /\.(jpe?g|png|gif)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=assets/images/[hash:base58:8].[ext]',
				]
			},
			{
				test: /\.svg$/,
				loader: 'file-loader?name=assets/[name].[ext]'
			}
        ]
    },
	sassLoader: {
		includePaths: [path.resolve(__dirname, "./assets")]
	},
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Fileserver | dev',
            template: 'web/index.dev.html',
        }),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: process.env.NODE_ENV === 'development',
            __DEVTOOLS__: true
        })
    ]
};
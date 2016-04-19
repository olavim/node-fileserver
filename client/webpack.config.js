var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './build/index.js'],
    output: {
        filename: "bundle.js",
        path: __dirname + "/static/scripts",
        publicPath: "/scripts/"
    },
    module: {
        loaders: [
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
				test: /\.svg$/,
				loader: 'file-loader?name=assets/[name].[ext]'
			}
        ]
    },
	sassLoader: {
		includePaths: [path.resolve(__dirname, "./assets")]
	},
    devtool: 'source-map'
};
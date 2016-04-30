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
    devtool: 'source-map'
};
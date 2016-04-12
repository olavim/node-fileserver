module.exports = {
    entry: ['babel-polyfill', './build/index.js'],
    output: {
        filename: "bundle.js",
        path: __dirname + "/static/scripts",
        publicPath: "/scripts/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devtool: 'source-map'
};
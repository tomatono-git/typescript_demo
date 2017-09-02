var path = require('path');

module.exports = {
    context: path.resolve(__dirname, "src/ts/"),
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'bundle.js'
    },

    devtool: 'source-map',

    module: {

        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }

        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};
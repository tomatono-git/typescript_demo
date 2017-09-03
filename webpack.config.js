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
        // loaders: [
        //     { test: /\.html$/, loaders: ['style-loader', 'html-loader'] },
        //     { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
        // ],
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
                test: /\.css$/,
                loaders: ['style-loader', "css-loader"]
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
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
        //     {
        //         test: /\.js$/,
        //         // loader: 'babel-loader',
        //         exclude: /node_modules/, // <- Don't miss it!
        //         query: {
        //             // plugins: ['transform-runtime'],
        //             presets: ['es2015']
        //         }
        //     }
        // ]
        // },
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                query: {
                    presets: ['es2015']
                }
                // ,
                // exclude: /node_modules/
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
        // loaders: [
        //     // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        //     { test: /\.tsx?$/, loader: 'ts-loader' }
        // ]
    },
    resolve: {
        extensions: ['.ts', '.js']
        // extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    }
};
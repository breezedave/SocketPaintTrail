const webpack = require("webpack");
const path = require('path');

module.exports = {
    mode: "production",
    entry: './fe/index.js',
    output: {
        filename: '../fe/main.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        "@babel/plugin-transform-spread",
                        "@babel/plugin-proposal-class-properties",
                    ],
                }
            }
        }]
    },
    watch: false,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    },
    optimization: {
        minimize: false,
    },
    devtool: false,
    plugins: [
        new webpack.SourceMapDevToolPlugin({})
    ],
};

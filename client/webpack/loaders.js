'use strict';
const config = require('./config'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            include: [config.srcPath],
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                presets: ['es2015-native-modules', 'stage-0'],
                plugins: ['transform-runtime']
            }
        },
        {
            test: /\.scss$/,
            include: [config.srcPath],
            loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader!postcss-loader!sass-loader"
            })
        },
        {
            test: /\.css$/,
            include: [config.srcPath],
            loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader"
            })
        },
        {
            test: /\.(jpg|jpeg|png|gif|ico)$/,
            loader: 'file-loader',
            query: {
                name: '[name].[sha1:hash:base64:6].[ext]',
                //regExp: '\/([a-z,\/]+)\/[a-z,0-9]+\..*'
                regExp: '(assets/)'
            }
        },
        {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff',
            query: {
                name: '[name].[sha1:hash:base64:6].[ext]',
            }
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream',
            query: {
                name: '[name].[sha1:hash:base64:6].[ext]',
            }
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            query: {
                name: '[name].[sha1:hash:base64:6].[ext]',
            }
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml',
            query: {
                name: '[name].[sha1:hash:base64:6].[ext]',
            }
        }
    ]
};

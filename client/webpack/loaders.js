'use strict';
const config = require('./config'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    loaders: [
        {
            test: /\.js$/,
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
            include: /node_modules/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader"
            })
        },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: /node_modules/,
        loader: "file?name=fonts/[name].[ext]"
      }
    ]
};

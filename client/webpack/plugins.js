'use strict';

const config = require('./config'),
    webpack = require('webpack'),
    rimraf = require('rimraf'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    Bump = require('bump-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const ISPROD = 'production' === config.env;

var plugins = [
    // cleanup
    {
        apply: (compiler) => {
            rimraf.sync(compiler.options.output.path);
        }
    },
    new webpack.DefinePlugin({
        ISPROD: ISPROD
    }),
    new CopyWebpackPlugin([
        {from: './src/assets', to: config.buildPath + '/assets'}
    ]),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css?hash=[contenthash]'),
    new HtmlWebpackPlugin({
        title: 'Color picker',
        filename: config.buildPath + '/index.html',
        template : config.srcPath + '/index.html',
        chunks: ['common', 'index'],
        inject: true
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        minChunks: Infinity,
        filename: 'vendor.bundle.js'
    }),
];

if (ISPROD) {
    plugins.push(new Bump(['../package.json']));
    plugins.push(new webpack.optimize.UglifyJsPlugin(
        {
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        }
    ))
}

module.exports = plugins;

'use strict';

const config = require('./config'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

const plugins = [
  new webpack.DefinePlugin({
    ENV: config.env
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
    minimize: false,
    debug: false
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    minChunks: 2,
    filename: 'common.js'
  }),
  new ngAnnotatePlugin({
    add: true,
  }),
];
module.exports = plugins;

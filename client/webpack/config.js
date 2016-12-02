'use strict';
const path = require('path');

const conf = {
    port: process.env.PORT || 5002,
    env: process.env.NODE_ENV || 'development',
    srcNodeModules: path.resolve(__dirname, '../node_models'),
    srcPath: path.resolve(__dirname, '../src'),
    devPath: path.resolve(__dirname, '../build/')
};
conf.buildPath = '../build/';

module.exports = conf;

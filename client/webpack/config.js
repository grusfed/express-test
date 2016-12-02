'use strict';
const path = require('path');
const projectConfig = require('../../package.json');

module.exports = {
  port: projectConfig.config.clientPort,
  env: process.env.NODE_ENV || 'development',
  srcNodeModules: path.resolve(__dirname, '../node_models'),
  srcPath: path.resolve(__dirname, '../src'),
  devPath: path.resolve(__dirname, '../build/'),
  buildPath: '../build/'
};

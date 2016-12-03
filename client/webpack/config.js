'use strict';
const path = require('path');
const projectConfig = require('../../package.json');

module.exports = {
  port: projectConfig.config.clientPort,
  apiPort: projectConfig.config.apiPort,
  env: process.env.NODE_ENV || 'development',
  srcNodeModules: path.resolve(__dirname, '../node_models'),
  srcPath: path.resolve(__dirname, '../src'),
  buildPath: path.resolve(__dirname, '../../build'),
};

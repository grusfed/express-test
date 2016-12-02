'use strict';

const config = require('./webpack/config');
const plugins = require('./webpack/plugins');
const loaders = require('./webpack/loaders');

const entry = {
  index: `${config.srcPath}/index`,
  common: [
    `webpack-dev-server/client?http://localhost:${config.port}/`,
    'webpack/hot/only-dev-server',
    'angular',
    'angular-animate',
    'angular-aria',
    'angular-material',
    'angular-ui-router'
  ]
};

module.exports = {
  context: __dirname,
  entry: entry,
  output: {
    path: config.buildPath,
    publicPath: '/',
    filename: '[name].js?hash=[hash]',
    chunkFilename: '[id].js?hash=[hash]',
    sourceMapFilename: '[file].map?hash=[hash]',
    devtoolModuleFilenameTemplate: function(info){
      return encodeURI(info.resourcePath);
    }
  },
  watch: false,
  watchOptions: {
    aggregateTimeout: 100
  },
  cache: true,
  devtool: 'eval-cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.sass', '.css', '.html'],
    modules: [
      config.srcNodeModules,
      'node_modules'
    ]
  },
  resolveLoader: {
    extensions: ['.js'],
    modules: [
      'node_modules'
    ]
  },

  plugins: plugins,
  module: loaders,
  devServer: {
    host: 'localhost',
    port: config.port,
    hot: true,
    inline: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  }
};

'use strict';

// webpack --json --profile > stat.json // open in http://webpack.github.io/analyse
const config = require('./webpack/config');
var autoprefixer = require('autoprefixer');

var plugins = require('./webpack/plugins'),
    loaders = require('./webpack/loaders');


let entry = {
    index: `${config.srcPath}/index`,
    common: [
        'angular',
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
    //displayModules: true,
    watch: false,
    watchOptions: {
        aggregateTimeout: 100
    },
    cache: false,
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.sass', '.css', '.html'],
        modules: [
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
        contentBase: config.devPath,
        hot: true,
        inline: true
    }
};

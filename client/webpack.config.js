'use strict';

// webpack --json --profile > stat.json // open in http://webpack.github.io/analyse
const config = require('./webpack/config');

const plugins = require('./webpack/plugins'),
    loaders = require('./webpack/loaders');

const entry = {
    index: `${config.srcPath}/index`
};

module.exports = {
    context: __dirname,
    entry: entry,
    output: {
        path: config.buildPath,
        publicPath: '/',
        filename: '[name].js?hash=[hash]',
        chunkFilename: '[id].js?hash=[hash]',
        sourceMapFilename: '[file].map?hash=[hash]'
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
        contentBase: config.devPath,
        hot: true,
        inline: true
    }
};

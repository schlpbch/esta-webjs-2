const webpack = require('webpack');
const helpers = require('./helpers');

const sharedConfig = require('./webpack.shared.config');

const AOT = helpers.hasNpmFlag('aot');

// var webpack = require('webpack');
// var extend = require('node.extend');
// var path = require('path');
// var browserSyncPlugin = require('browser-sync-webpack-plugin');
// var buildPath = path.join(__dirname, 'target/build');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var webjsConfig = require('./config/shared.build.config');

/**
 * Development Konfigurationsdatei fuer Webpack (der Teil, der nur fuer den Development Build ist)
 */
exports.development = extend({}, sharedConfig, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    }, plugins: [
        new browserSyncPlugin({
            proxy: 'localhost:3000'
        }),
        new HtmlWebpackPlugin({
            template: '../index.html'
        })
    ], watch: true, devtool: 'source-map'
});


// /**
//  * Production Konfigurationsdatei fuer Webpack (der Teil, der nur fuer den produktiven Build ist)
//  * @type {} Webpack Konfiguration
//  */
// exports.production = extend({}, commonConfig, {
//     output: {
//         path: buildPath,
//         filename: '[name].[chunkhash].js'
//     }, plugins: [
//         new webpack.optimize.DedupePlugin(),
//         new webpack.optimize.UglifyJsPlugin({
//             minimize: true, compress: {
//                 warnings: true
//             }
//         }),
//         // automatisches Einfügen der Dateien app und vendor
//         new HtmlWebpackPlugin({
//             template: '../index.html'
//         })
//     ], devtool: 'cheap-source-map'
// });

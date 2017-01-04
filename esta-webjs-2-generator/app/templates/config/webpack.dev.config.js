const webpack = require('webpack');
const extend = require('node.extend');

const sharedConfig = require('./webpack.shared.config');

/**
 * Development Konfigurationsdatei fuer Webpack (der Teil, der nur fuer den Development Build ist)
 */
module.exports = extend({}, sharedConfig.commonConfig, {
    performance: {
        hints: false
    },
    watch: true, devtool: 'source-map', devServer: {
        port: 3000, host: 'localhost', historyApiFallback: true, watchOptions: {
            aggregateTimeout: 300, poll: 500
        }
    }
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

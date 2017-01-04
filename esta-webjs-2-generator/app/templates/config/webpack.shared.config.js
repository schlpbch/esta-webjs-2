/**
 * Gemeinsame Konfigurationsdatei fuer Webpack (der Teil, der fuer alle Umgebungen gleich ist)
 */
const ARGS = process.env.npm_lifecycle_event || '';
const AOT = ARGS.includes('aot');
const PATH = require('path');

const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports.commonConfig = {
    entry: {
        polyfills: './src/polyfills.ts',
        main: AOT ? './src/main.browser.aot.ts' : './src/main.ts'
    }, output: {
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[name].[chunkhash].bundle.map',
        chunkFilename: '[id].[chunkhash].chunk.js'
    }, plugins: [
        new CheckerPlugin(),

        new CommonsChunkPlugin({
            name: 'polyfills', chunks: ['polyfills']
        }),

        // treeshaking
        new CommonsChunkPlugin({
            name: 'vendor', chunks: ['main'], minChunks: m => /node_modules/.test(m.resource)
        }),

        // Specify the correct order the scripts will be injected in
        new CommonsChunkPlugin({
            name: ['polyfills', 'vendor'].reverse()
        }),

        new ContextReplacementPlugin(// The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, __dirname),

        new HtmlWebpackPlugin({
            template: 'src/index.html', chunksSortMode: 'dependency', metadata: {baseUrl: '/'}, inject: 'head'
        }),

        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        })
    ], module: {
        rules: [
            {
                test: /\.ts$/, use: [
                'awesome-typescript-loader?{configFileName: "tsconfig.webpack.json"}',
                'angular2-template-loader',
                'angular-router-loader?loader=system&genDir=compiled/src/app&aot=' + AOT
            ], exclude: [/\.(spec|e2e)\.ts$/]
            }, {
                test: /\.json$/, use: 'json-loader'
            },

            {
                test: /\.css$/, use: ['to-string-loader', 'css-loader']
            },

            {
                test: /\.html$/, use: 'raw-loader', exclude: [PATH.resolve(__dirname, 'src/index.html')]
            },

            {
                test: /\.(jpe?g|png|gif|svg|ttf|eot)$/i, use: 'file-loader'
            }, {
                test: /\.(woff|woff2)$/, loader: 'file-loader?limit=10000&mimetype=application/font-woff'
            }
        ]
    }, resolve: {
        extensions: ['.js', '.ts', '.json'],
        modules: [PATH.resolve(__dirname, '../src'), PATH.resolve(__dirname, '../node_modules')]
    }
};


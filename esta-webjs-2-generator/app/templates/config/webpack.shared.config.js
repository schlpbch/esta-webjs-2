/**
 * Gemeinsame Konfigurationsdatei fuer Webpack (der Teil, der fuer alle Umgebungen gleich ist)
 */
module.exports.commonConfig = {
    context: path.resolve(__dirname, 'src/app'), // Einstiegspunkt fuer Webpack
    entry: {
        app: '../src/main.ts', vendor: [
            'bootstrap/dist/css/bootstrap.css'
        ]
    }, // Modulkonfiguration fuer alle Dateitypen, welcher Loader soll verwendet werden
    modules: {
        rules: [
            {
                test: /\.ts$/, use: [
                'awesome-typescript-loader',
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
                test: /\.html$/, use: 'raw-loader', exclude: [helpers.root('src/index.html')]
            },

            {
                test: /\.(jpe?g|png|gif|svg|ttf|eot)$/i, use: 'file-loader'
            },
            {
                test: /\.(woff|woff2)$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            }
        ]
    }, resolve: {
        extensions: ['', '.html', '.css', '.js', '.ts'], fallback: path.join(__dirname, 'node_modules')
    }, resolveLoader: {fallback: path.join(__dirname, 'node_modules')}
};


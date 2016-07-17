var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WriterPlugin = require('write-file-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/js/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

function CompilerPlugin(options) {}
CompilerPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {
    console.log('Compilation completed! ~~ ', Date())
  });
};

module.exports = {
    devtool: 'source-map',
    devServer: {
        outputPath: path.resolve(__dirname + '/dist')
    },
    entry: [
        './src/js/app/index.js',
        './src/js/app.js',
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: "url-loader?limit"
        }]
    },
    historyApiFallback: true,
    output: {
        filename: "application.js",
        path: path.resolve(__dirname + '/dist'),
        libraryTarget: 'var',
        library: 'application'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [HTMLWebpackPluginConfig, WriterPlugin, new CompilerPlugin()]
}

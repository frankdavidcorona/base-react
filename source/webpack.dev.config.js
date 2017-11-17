const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    favicon: './src/public/images/favicon.png',
    inject: 'body'
});

module.exports = {

    devtool: 'eval',

    entry: ['whatwg-fetch','./src/index'],

    output: {
        path: path.resolve(__dirname, '/public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        historyApiFallback: true
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.(jpe?g|png|gif|svg)$/i, loaders: 'url-loader?hash=sha512&digest=hex&name=[hash].[ext]'},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.(sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {
                test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'
            },
            {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};
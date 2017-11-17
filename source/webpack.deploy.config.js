const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    favicon: './src/public/images/favicon.png',
    inject: 'body'
});

module.exports = {
    devtool: 'source-map',
    entry: {
        app: path.join(__dirname, './src/index'),
        vendor: ['react', 'react-dom', 'react-router'],
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: '[name].[hash].js',
        }),
        HtmlWebpackPluginConfig,
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                'screw_ie8': true,
                'warnings': false,
                'unused': true,
                'dead_code': true,
                'conditionals': true,
                'join_vars': true
            },
            output: {
                comments: false,
                beautify: false
            },
            sourceMap: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
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
            {
                test: /\.(jpe?g|png|gif|ico|svg)$/,
                use: 'file-loader?name=./src/public/images/[name].[ext]'
            }
        ]
    }
};

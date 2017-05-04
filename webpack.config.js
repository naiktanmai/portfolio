const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
})

const ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('docs'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                exclude: '/node_modules/',
                use: ExtractTextPlugin.extract({
                    fallback: [{
                        loader: 'style-loader',
                    }],
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader',
                    }],
                }),
            },
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    } // Convert images < 10k to base64 strings
                }]
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig, extractSass]
}

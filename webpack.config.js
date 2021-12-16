const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getEntry, getPageTemplate } = require('./util/index');
const htmlPlugin = getPageTemplate();
module.exports = {
    mode: 'development',
    entry: getEntry(),
    // {
    //     main: {
    //         import: './src/main.js',
    //         dependOn: 'shared'
    //     },
    //     bootstrap: {
    //         import: './src/bootstrap.js',
    //         dependOn: 'shared'
    //     },
    //     shared: 'lodash',
    // },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        proxy: {
            '/api': {
                target: '',//代理地址
                pathRewrite: { '^/api': '' },
                changeOrigin: true,     // target是域名的话，需要这个参数，
                secure: false, // 设置支持https协议的代理
            }
        }
    },
    plugins: [
        ...htmlPlugin
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    }
}
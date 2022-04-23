const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 10250,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif|svg)$/,
                type: "asset/resource",
                generator: {
                    filename: "image/[name].[hash:8][ext]"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        // 重新构建前，删除dist目录文件
        new CleanWebpackPlugin(),
        // 生成新的html文件
        new HtmlWebpackPlugin({
            title: 'webpack'
        }),
        // 热更新（HMR）-局部刷新
        new webpack.HotModuleReplacementPlugin()
    ]
}
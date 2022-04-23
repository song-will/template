const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack  = require('webpack')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: resolve('dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.vue', 'json'],
        alias: {
            '@': resolve('src')
        }
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
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
            }
        }),
        // 重新构建前，删除dist目录文件
        new CleanWebpackPlugin(),
        // 生成新的html文件
        new HtmlWebpackPlugin({
            title: 'webpack'
        })
    ]
}
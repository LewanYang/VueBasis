/**
 * Created by Administrator on 2018/4/8 0008.
 */
var path = require('path')
const webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var cleanWebpackPlugin = require('clean-webpack-plugin')
// 引入插件
let extractTextPlugin = require('extract-text-webpack-plugin')
// 初始化两个实例用于两处规则分别加载
let extractCSS = new extractTextPlugin('css/[name]-one.css')
let extractLESS = new extractTextPlugin('css/[name]-two.css')


module.exports = {
    entry: path.resolve(__dirname, './src/js/app.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle-[hash].js'
    },
    devServer: {
        port: 3000,
        //hot:true,
        inline: true
    },
    resolve: {
        alias: {
            vue:'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractCSS.extract(
                    [
                        {
                            loader: "css-loader",
                            options: {importLoaders: 1}
                            // importLoaders 解决由于css-loader处理文件导入的方式导致postcss-loader
                            // 不能正常使用的问题
                        },
                        {loader: "postcss-loader"},
                        // 注意解析顺序是由上往下，css文件是先要通过css-loader进行处理，
                        // 再将处理好的css交由style-loader处理
                    ]
                ),
                exclude: /node_modules/
                // 排除对node_modules文件夹下面的所有资源的匹配
            },
            {
                test: /\.less$/,
                use: extractLESS.extract(
                    [
                        {loader: "css-loader", options: {importLoaders: 1}},
                        {loader: "postcss-loader"},
                        {loader: "less-loader"}
                        // 最先加载的是最下面这个
                    ]
                )
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test:/\.styl$/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options:{
                            sourceMap:true
                        }
                    },
                    'stylus-loader'
                ]
            },
            // {
            //     test: /\.(png|jpg|jpeg|gif|svg)$/,
            //     exclude: /node_modules/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: '[hash].[ext]',
            //             outputPath: '/assets/',
            //             useRelativePath: true
            //         }
            //     }]
            // }
            // 使用url-loader
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            outputPath: 'assets/',
                            useRelativePath: true
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            }
                        }
                    }
                ]
            }
        ]
    },
    //初始化插件
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html', // 定义插件读取的模板文件是根目录下的index.html
            filename: 'index.html'  // 定义通过模板文件新生成的页面名称
        }),
        new cleanWebpackPlugin(
            ['dist'],
            {
                root: __dirname,
                verbose: true,
                dry: false
            }
        ),
        // 注册插件
        extractCSS,
        extractLESS
    ]
}
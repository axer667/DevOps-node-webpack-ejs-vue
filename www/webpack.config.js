const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, 'serve'),
        },
        compress: true,
        port: 8080,
    },

    entry: {
        main: [path.resolve(__dirname, './src/js/index.js'), path.resolve(__dirname, './src/js/initVue.js')],
        vue: path.resolve(__dirname, './src/js/initVue.js'),
        componentFooter: path.resolve(__dirname, './src/js/componentFooter.js')
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].bundle.js',
        chunkFilename: '[id].bundle.js',
    },

    module: {
        rules: [
            // Vue
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCSSPlugin.loader,
                        options: {

                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            }

                        },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
        ]
    },

    plugins:[
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack Title',
            template: "src/html/index.html", // шаблон
            filename: 'index.html', // название выходного файла
            chunkFilename: '[name].html',
            chunks: 'all',
        }),
        new MiniCSSPlugin({
            filename: `css/[name].css`,
            chunkFilename: 'css/[id].css',
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        alias: {
            //'vue': '@vue/runtime-dom', // only <template>
            vue: "vue/dist/vue.esm-bundler.js" // Ha-hack =) // ? vue/dist/vue.runtime.esm-bundler
        },
        extensions: ["*", ".js", ".vue", ".json"],
    },


}
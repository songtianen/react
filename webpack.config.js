var path = require('path')
// require webpack  就会去 package.json-->webpack ->node_modules-->webpack-->paceage.json-->"man:lib/webpack.js"
var webpack = require('webpack')
// 模版插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// var nodeModulesPath = path.resolve(__dirname, 'node_modules')
 console.log(`bibibi!!!${process.env.NODE_ENV}`)
console.log(`sdsssdsdsdsdsd${process.env.__DEV__}`)
console.log(process.env.npm_lifecycle_event)
module.exports = {
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    // 自动查找后缀名，文件中就可以不写后缀名
    resolve:{
        extensions:[ '.js','.jsx']
    },
    devServer: {
      // 设置代理服务器
      proxy:{
        '/api':{
          target:'http://localhost:3000',
          secure:false
        }
      },
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        // colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    },
    module: {

        rules: [
            { test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: 'babel-loader' },
            { test: /\.less$/,
              exclude: /node_modules/,
              use:["style-loader",
                   "css-loader",
                   "postcss-loader",
                   "less-loader"]
            },
            { test: /\.css$/,
              exclude: /node_modules/,
              use:["style-loader",
                   "css-loader",
                   "postcss-loader"]
            },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i,
              use:[{loader:"url-loader",options:{limit:5000}}]
            },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
              use:[{loader:"url-loader",options:{limit:5000}}]
            } // 限制大小小于5k
        ]
    },

    plugins: [
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息

        // 打开浏览器
        new OpenBrowserPlugin({
          url: 'http://localhost:8080'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],


}

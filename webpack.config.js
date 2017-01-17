var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{
    app: ['./src/app/app', './src/app/directives/addItem', './src/app/directives/todoItem'],
    vendor: [
      'angular'
    ]
  },
  output: {
    //告诉webpack把打包好的文件放到哪儿
    path: './dist/js',
    
    //告诉webpack的插件在生产环境下如何更新CSS html中的文件URL的
    publicPath: '',
    filename: '[name].bundle.js'
    
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: '/\.js|\.jsx|\.es6$',
        loader: 'babel',
        exclude: '/node_modules/'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }]
  },
  resolves: {
    extensions: ['', '.js', '.scss']
  },
  devServer: {
    contentBase: './dist',  //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
    devtool: 'eval',
    hot: true,        //自动刷新
    inline: true,
    port: 3005,
    host: 'localhost'
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),//开启热替换插件
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.optimize.UglifyJsPlugin({
      mangle:   true,
      compress: {
        warnings: false // Suppress uglification warnings
      }
    })
  ],
  externals: {}
};

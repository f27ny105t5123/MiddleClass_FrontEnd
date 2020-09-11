var path = require('path');
const webpack = require('webpack');
//const WebpackDevServer = require('webpack-dev-server');
const cssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  //watch: true,
  //ignored: ,  //监听中忽略的文件
  mode: 'production',
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[chunkhash:8].js'    //chunkhash可以取前n位，这里是8位
  },
  module:{
      rules:[
      {
          test: /\.js$/,
          use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        //use: [cssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
        //use: [cssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [{loader: 'file-loader',
              options:{
              name: '[name].[hash:8].[ext]'
              }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
    ]
  },

  plugins: [
    new cssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    })
  ]
};

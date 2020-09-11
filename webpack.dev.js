var path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

module.exports = {
  //watch: true,
  //ignored: ,  //监听中忽略的文件
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'index.bundle.js'
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
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [{loader: 'url-loader',
              options:{
              limit: 8192
              }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
    ]
  },

  //以下部分和chunkhash冲突，需要使用的话，把下面的删掉
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    host: '127.0.0.1',
    port: '8080',
    hot: true,
    contentBase: './src'
  }

};

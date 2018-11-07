const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  // debugging
  mode: 'development',
  entry: './src/app.js',
  //   debugging
  devtool: 'inline-source-map',
  output: {
      filename: 'bundle.js',
      //   create absolute path
      path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      //   clean build folder(dist) before building
      new CleanWebpackPlugin(['dist']),
      //   create new HTML file or use your own template
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
     //   making fetch possible
      new CopyWebpackPlugin([{ 
        from: './src/data.json',
        to: __dirname + '/dist/data.json'
    }])
  ],
  //   restarts server automatically
  devServer: {
      contentBase: './dist'
  },
  module: {
      rules: [{
          //   get all files with file extension CSS
          test: /\.css/,
          //   enable CSS imports and add them to HTML file
          use: ['style-loader', 'css-loader']
      }]
  }
};
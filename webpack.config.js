 //entry --> output

 const path = require('path');

 module.exports = {
     module: {
         rules: [{
             loader: 'babel-loader',
             test: /\.js$/,
             exclude: /node_modules/
         }, {
             test: /\.s?css/,
             use: [
                 'style-loader',
                 'css-loader',
                 'sass-loader'
             ]
         }]
     },
     devtool: 'cheap-module-eval-source-map',
     devServer: {
         contentBase: path.join(__dirname, 'dist')
     }
 };
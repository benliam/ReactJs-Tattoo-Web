const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
 mode: "development",

 entry: {
   app: "./src/main.js"
 },

output: {
   filename: 'js/[name].[chunkhash].js',
   path: path.resolve(__dirname, 'dist'), // base path where to send compiled assets
   publicPath: '/', // base path where referenced files will be look for
   clean: true
 },

 devtool: 'inline-source-map',

 stats: {
      children: true,
  },

 devServer: {
   contentBase: path.join(__dirname, './'), // where dev server will look for static files, not compiled
   hot: true,
   open: true,
   liveReload: true,
   historyApiFallback: true,  
 },

 resolve: {
   extensions: ['*', '.js', '.jsx'],
   alias: {
     '@': path.resolve(__dirname, 'src') // shortcut to reference src folder from anywhere
   }
 },
 module: {
   rules: [
     { // config for es6 jsx
       test: /\.(pug|js|jsx)$/,
       exclude: /node_modules/,
       use: {
         loader: "babel-loader"
       }
     },
     { // Config pug file
        test: /\.pug$/,
        use: [ 'babel-loader', 'pug-as-jsx-loader' ]
    },
   {
      test: /\.(sa|sc|c)ss$/,
      use: [
          {
              loader: MiniCssExtractPlugin.loader
          },
          {
               loader: 'css-loader'
          },
          {
               loader: 'postcss-loader'
          },
          {
              loader: 'resolve-url-loader'
          },
          {
              loader: 'sass-loader',
          }
                ]
   },
   { // config for images
       test: /\.(png|svg|jpg|jpeg|gif)$/,
       use: [
         {
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'images',
           }
         }
       ],
    },
    {
    test: /\.(woff|woff2|ttf|otf|eot)$/,
       use: [
                {
              loader: 'file-loader',
               options: {
               name: '[name].[ext]',
               outputPath: 'fonts'
                 }
               }
            ]
      },

   ]
 },

 plugins: [
   new HtmlWebpackPlugin({ 
     template: "./src/index.html",
     filename: "index.html",
     publicPath: "/",
     title: "Benz.Tattoo Design",// plugin for inserting scripts into html
     favicon: './src/favicon/benz-logo-icon-180.png'
   }),
   new MiniCssExtractPlugin({ // plugin for controlling how compiled css will be outputted and named
     filename: "css/[name].[chunkhash].css",
     chunkFilename: "css/[id].css"
   }),
   new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ["css/*.*", "js/*.*", "fonts/*.*", "images/*.*"]
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.$': 'jquery',
    'window.jQuery': 'jquery'
  })
 ]
};
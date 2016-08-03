var webpack = require("webpack");
var path = require("path");
var precss = require("precss");
var autoprefixer = require("autoprefixer");

var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {  
  devtool: "source-map",
	entry: {
		app: "./app.js",
		vendor: ["react", "react-dom", "react-router", "redux"]
  },
	output: {
		path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
		filename: "app.bundle.js"
	},
  resolve: {
    modulesDirectories: ["node_modules"]
  },  
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["stage-0", "react", "es2015"]
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.s[ac]ss$/,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap!postcss!sass?sourceMap")
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=/images/[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }           
    ],     
  },
  postcss: function() {
    return [precss, autoprefixer]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),    
    new ExtractTextPlugin("css/styles.css"),    
    new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: true })
  ]
}
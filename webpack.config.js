var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: './project_4/quiz/static/js/index',

  output: {
    path: path.resolve('./project_4/quiz/static/bundles/'),
    filename: "[name]-[hash].js",
  },

  plugins: [
  new BundleTracker({filename: './project_4/webpack-stats.json'}),
  ],
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
   {
        test: /\.svg$/,
        use: [
        {
          loader: "babel-loader"
        },
        {
          loader: "react-svg-loader",
          options: {
          jsx: true // true outputs JSX tags
          }
        }
    ]
  }
  ]
},
resolve: {
  extensions: ['*', '.js', '.jsx']
}

};
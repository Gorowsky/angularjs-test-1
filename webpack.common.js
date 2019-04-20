const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin

module.exports = {
  entry: `${__dirname}/app.js`,
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.(css)$/,
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" }
        ],
        exclude: [
          /node_modules/
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/index.html`,
      inject: 'body'
    })
  ]
};
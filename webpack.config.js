const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: {
      main:"./src/index.js",
      vendor: ["react","redux",'react-redux']
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: '[name].bundle.js',
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 8080,
      publicPath: "http://localhost:8080/dist/",
      hotOnly: true
    },
    module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env","@babel/react"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
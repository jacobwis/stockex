const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PROD = NODE_ENV === 'production';

const devPlugins = [new webpack.HotModuleReplacementPlugin()];

const prodPlugins = [
  new MiniCssExtractPlugin({
    filename: 'styles.css'
  })
];

const config = {
  devServer: {
    contentBase: [path.join(__dirname, 'build')],
    compress: true,
    hot: true,
    host: '0.0.0.0',
    overlay: true,
    port: 3000,
    proxy: {
      '/graphql': 'http://localhost:3001'
    },
    historyApiFallback: true
  },
  entry: './client/index.tsx',
  mode: IS_PROD ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        use: [
          IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
    publicPath: '/'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};

if (!IS_PROD) {
  config.plugins.push(...devPlugins);
}

if (IS_PROD) {
  config.plugins.push(...prodPlugins);
}

module.exports = config;

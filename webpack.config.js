const webpack            = require('webpack')
const merge              = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path               = require('path')

const TARGET = process.env.npm_lifecycle_event

const PATHS = {
  src:          path.join(__dirname, 'src'),
  build:        path.join(__dirname, 'build'),
  node_modules: path.join(__dirname, 'node_modules'),
}

const common = {
  entry: {
    src: PATHS.src,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        },
      }
    ]
  },
  output: {
    path: PATHS.build,
    filename: '/bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      PATHS.src,
      PATHS.node_modules,
    ],
  }
}

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      devtool: 'eval-source-map',
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  })
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    plugins: [
      new CleanWebpackPlugin([PATHS.build])
    ]
  })
}
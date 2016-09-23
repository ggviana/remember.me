const webpack            = require('webpack')
const merge              = require('webpack-merge')
const path               = require('path')
const pkg                = require('./package')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const OfflinePlugin      = require('offline-plugin')

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
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Remember me'
    }),
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
    ],
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
        },
      ]
    },
  })
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    entry: {
      vendor: Object.keys(pkg.dependencies)
    },
    plugins: [
      new CleanWebpackPlugin([PATHS.build]),
      new ExtractTextPlugin('[name].[chunkhash].css'),
      new OfflinePlugin({
        version: pkg.version,
        AppCache: false,
        ServiceWorker: {
          output: 'service-worker.js'
        },
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": '"production"'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor']
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
    ],
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract(
            'style',
            'css?modules&importLoaders=1&localIdentName=[hash:base64:5]'
          ),
        },
      ]
    },
  })
}
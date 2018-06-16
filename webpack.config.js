/*------------------------------------*\
  Imports
\*------------------------------------*/
const path = require('path');
const util = require('util');
const webpack = require('webpack');
//const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const package = require('./package.json');


/*------------------------------------*\
  Environment Variables
\*------------------------------------*/
var NODE_ENV = process.env.NODE_ENV;
var VERSION = package.version;


/*------------------------------------*\
  Browsers
\*------------------------------------*/
const browsersList = [
  '> 1%',
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 40',
  'chrome >= 40',
  'safari >= 7',
  'ios >= 7',
  'android >= 4.4',
]


/*------------------------------------*\
  Base Config
\*------------------------------------*/
module.exports = {

  mode: NODE_ENV,

  entry: {
    index: path.join(__dirname, '/src/index.js'),
  },


  watch: NODE_ENV==='development',


  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js',
  },


  //devtool: 'source-map',
  devtool: 'eval',


  resolve: {
    extensions: [
      '.js',
      '.vue',
      '.jsx',
      '.json',
    ],
  },


  module: {

    rules: [

      {
        test: /\.js$/,
        //exclude: path.resolve(__dirname, 'node_modules'),
        include: [
          path.resolve(__dirname),
        ],
        //include: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              compact: true,
              presets: [
                [
                  '@babel/preset-env', {
                    forceAllTransforms: true,
                    targets: {
                      browsers: browsersList,
                    },
                    debug: true,
                  }
                ]
              ],

              //plugins: [
              //  '@babel/plugin-transform-arrow-functions',
              //  '@babel/plugin-transform-template-literals',
              //  '@babel/plugin-transform-shorthand-properties',
              //  '@babel/plugin-proposal-object-rest-spread',
              //],

            },
          },
        ],
      },


      {
        test: /\.vue$/,
        //exclude: /node_modules/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              esModule: false,
            }
          },
        ],
      },


    ]
  },


  plugins: [

    //new webpack.DefinePlugin({
    //  'process.env': PROCESS_ENV,
    //}),

  ],

}



/*------------------------------------*\
  Production
\*------------------------------------*/
if (NODE_ENV==='production') {

  module.exports.devtool = 'source-map';
  module.exports.output.filename = '[name].js';

  module.exports.optimization = {
    minimize: true,
  };

  module.exports.plugins = (module.exports.plugins || []).concat([

    // cleanups after build
    //new WebpackCleanupPlugin({
    //  preview: false,
    //}),

    // uncomment if you want to analyze
    //new BundleAnalyzerPlugin({
    //  analyzerMode: 'static',
    //  openAnalyzer: false,
    //}),

  ]);

}

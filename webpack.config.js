const bundleAnalyzer = require('webpack-bundle-analyzer');
const path = require('path');

const filename = './dist/app.js';
const outpath = path.join(__dirname);
const mode = 'production';
const entry = path.join(__dirname, 'index');
const output = { filename, path: outpath };
const resolve = { extensions: ['.js', '.ts', '.tsx'] };
const rules = [ { test: /\.tsx?$/, use: [{ loader: 'ts-loader' }] } ];
const plugins = [ new bundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: 'static' }) ];

const buildDemo = {
  mode,
  entry,
  output,
  resolve,
  plugins,
  module: { rules }
}

module.exports = () => [ buildDemo ];

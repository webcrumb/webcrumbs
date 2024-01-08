const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

const sharedModuleRules = {
  rules: [
    {
      test: /\.?jsx$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          babelrc: false
        }
      }
    },
  ]
}

module.exports = () => {
  return {
    entry: './src/index.jsx',
    output: {
      filename: './client.js',
      publicPath: 'plugins/plugin3/',
      // path: path.resolve(__dirname, '../../dist/plugin3'),
      // chunkFilename: '[name].client.js', // Or your preferred naming convention
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './plugin.json',
            to: path.resolve(__dirname, '../../dist', 'plugin3')
          }
        ]
      }),
    ],
    module: sharedModuleRules
  }
}
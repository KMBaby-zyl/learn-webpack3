const path = require('path');
const webpack = require('webpack');
/**
 * https://github.com/webpack/webpack/releases/tag/v3.0.0
 */
/**
 * ModuleConcatenationPlugin == watch mode ==> issue
 * https://github.com/webpack/webpack/issues/5132
 */
module.exports = {
    watch: true,
    entry: {
        index: '../src/index.js'
    },
    output:{
        filename: "[name].js",
        path: path.resolve(__dirname, 'w3dist'),
    },
    plugins: [
		  new webpack.optimize.ModuleConcatenationPlugin()
	  ]
}


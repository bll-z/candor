import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import PROD_CONFIG from './config/prod';
import DEVELOP_CONFIG from './config/develop';

const APP_ROOT = __dirname;
const SRC_DIR = `${APP_ROOT}/src`;
const BUILD_DIR = `${APP_ROOT}/dist`;
const CSS_BUNDLE_NAME = 'bundle.css';
const JS_BUNDLE_NAME = (process.env.NODE_ENV === 'production') ? 'bundle.[chunkhash:8].js' : 'bundle.js';

export const PLUGINS = [

	new CopyWebpackPlugin([
		{ from: 'static/', toType: 'dir', to: 'static/', ignore: '*.DS_Store' },
	]),

	// Extract all of the compliles SCSS into a single .css file.
	new MiniCssExtractPlugin({
		filename: CSS_BUNDLE_NAME, // Resulting .css bundle name
	}),

	// Generate the index.html file and adds the bundle.js and bundle.css files to the index.html.
	new HtmlWebpackPlugin({
		hash: (process.env.NODE_ENV === 'production'), // We only cache bust for production builds (to prevent the build up of hashed files in the output folder)
		template: 'index.ejs', // EJS Template used to generate the index.html file
		title: 'candor', // Strictly no title on this page, we set the title on page load in the javascript
	}),

	// Inject raw global variables into the webpack environment that can be references from the untranspiled javascript.
	// NOTE: This plugin will *basically* do a find a replace and build time.
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		CONFIG: (process.env.NODE_ENV === 'production') ? { ...PROD_CONFIG } : { ...DEVELOP_CONFIG },
	}),
];

const config = {

	// Pointer to the root source code folder
	context: SRC_DIR,

	// Main Entrypoint for the application.
	entry: {
		app: './index.entry.jsx',
	},

	// Webpack plugins
	plugins: PLUGINS,

	// Build rules for when a file type is encountered during a webpack build
	module: {
		rules: [
			{
				test: /^(?!.*\.spec\.).*\.jsx?$/, // ...for each file that matches *.js or *.jsx, ignoring all *.spec.*.js(x)
				include: SRC_DIR, // ...that happens to live in this folder
				loader: 'babel-loader', // parse via the babel-loader pipeline
				options: { // Options to be passed to the babel-loader pipeline function
					cacheDirectory: true, // Cache the transformed output, so that you don't have to rebuild everything, when only 1 file changes.
				},
			},
			{
				test: /\.s?css$/, // ...for each file that matches *.scss
				use: [
				  {
					loader: MiniCssExtractPlugin.loader,
					options: {
					  // you can specify a publicPath here
					  // by default it uses publicPath in webpackOptions.output
					  publicPath: '../',
					},
				  },
				  { loader: 'css-loader', options: { url: false } },
				  'sass-loader',
				],
			},
			{
				test: /\.(gif|ttf|eot|svg|woff2?)$/,
				use: [
					{
						loader: 'url-loader?name=[name].[ext]',
						options: {
							limit: 8192,
						},
					},
				],
			},
		],
	},

	// Output location for the final transpiled output
	output: {
		path: BUILD_DIR,
		pathinfo: true,
		filename: JS_BUNDLE_NAME,
	},

	// Resolvers for folders within the project structure
	resolve: {
		modules: [
			path.resolve(SRC_DIR),
			'node_modules',
		],
		extensions: ['.js', '.jsx'],
	},

	// Options used for the --watch command
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
		ignored: '/node_modules/',
	},

	// Command line output cleanup
	stats: {
		children: false,
		warnings: false,
	},

};

if (process.env.NODE_ENV === 'development') {
	const DashboardPlugin = require('webpack-dashboard/plugin');
	const dashboard = new DashboardPlugin({ port: 3001 });

	// allow warnings to show up appropriately
	const define = new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('development'),
	});

	config.plugins.push(dashboard, define);

	config.devServer = {
		port: 8080,
	};
}

export default config;

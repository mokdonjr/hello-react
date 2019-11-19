{/* npm install 의존 모듈들을 webpack으로 불러옴 */}
var webpack = require('webpack');

{/* 모듈로 내보내 다른 코드에서 require, import로 불러올 수 있음 */}
module.exports = {
	{/* entry 파일내 require, import 모듈들을 재귀적으로 불러내 합침*/}
	entry: './src/index.js',

	{/* 합쳐진 파일들을 filename 으로 명시된 번들로 저장 */}
	output: {
		path: __dirname + '/public/',
		filename: 'bundle.js'
	},

	{/*개발 서버 설정*/}
	devServer: {
		hot: true, {/*hot-loader*/}
		inline: true, {/*hot-loader에 필요한 webpack-dev-server를 번들에 같이 넣어줌*/}
		host: '0.0.0.0',
		port: 4000,
		contentBase: __dirname + '/public/',
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react']
				}
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}
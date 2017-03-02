module.exports = {
	entry : './main.jsx',
	output : {
		path : './dist',
		filename : 'bundle.js'
	},
	module : {
		loaders : [{
			test : /\.jsx$/,
			loader : 'babel-loader',
			exclude : '/node_modules'
		}]
	}
}
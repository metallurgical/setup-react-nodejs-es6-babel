# setup-react-nodejs-es6-babel
Tooling for setting Reactjs with nodejs + es6 + babel + webpack transpiler

# Tools/Installation
Navigate to project root directory, and use with node npm command to install, eg : `npm install --save-dev <moduleName> <moduleNameN>`
  - react — react library
  - react-dom — react dom library
  - babel-loader — loader used with webpack
  - babel-core — babel's core itself
  - babel-preset-es2015 — transpiler from es6 to es5 features
  - babel-preset-react — transpiler from jsx to js
  - webpack — bundling asset into chunk,etc..
  - express — nodejs lightweight framework
  
# Webpack Config
Save the webpack configuration as `<root-project>/webpack.config.js` . To run the the code, type in `webpack` in terminal/cli

```js
module.export = {

  entry : './main.js',
  output : {
    path : './dist',
    filename : 'bundle.js'
  },
  module : {
    loaders : [{
      test : /\.jsx$/,
      loader : 'babel-loader',
      exclude : '/node_modules/'
    }]
  }
}
```

Explanation :

 - entry = the main entry/code as our source
 - output.path = path folder where output should be located
 - output.filename = the name of output file
 - module.loaders.test = find the files file .jsx extension only
 - module.loaders.loader = webpack loader we used for transpile
 - module.loaders.exclude = never include the folder


#Babel Preset Configuration
Save the babel configuration as `<root-project>/.babelrc` — Need by babel

```js
{
  "presets" : ["es2015","react"]
}
```

# Express Simple Server Setup
This file contains our server setup and route. And we need to run this file using `node server.js`. Save this file as `<root-project>/server.js`

```js
var express = require( 'express' ); // require express framework
var app = express(); // call express module to get its instance
var path = require( 'path' ); // path helpers's module

// root application route
app.get('/', function ( req, res ) {
  res.sendFile( path.resolve( __dirname . 'views/index.html' ); // index is our view file
});

// execute and run server on 3000 port
app.listen( '3000', function () {
  console.log( 'Server is running on port 3000' );
});
```



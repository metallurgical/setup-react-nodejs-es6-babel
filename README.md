# setup-react-nodejs-es6-babel
Tooling for setting Reactjs with nodejs + es6 + babel + webpack transpiler

# Tools/Installation
Navigate to project root directory, and use with node npm command to install, eg : `npm install --save-dev <moduleName> <moduleNameN>`
  - react
  - react-dom
  - babel-loader
  - babel-core
  - babel-preset-es2015
  - babel-preset-react
  - webpack
  - express
  
# Webpack Config
Save the webpack configuration as `<root-project>/webpack.config.js`

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

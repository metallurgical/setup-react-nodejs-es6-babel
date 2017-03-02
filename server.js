var path         = require( 'path' );
var express = require( 'express' );

var app = express();
app.use('/static', express.static( path.join( __dirname, '/dist' ) ) )

app.get('/', function ( req, res ) {
	res.sendFile( __dirname + '/view/index.html' );
});

app.listen('3000', function () {
	console.log('server is listening port 3000')
});

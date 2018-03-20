/**
 * Created by grouault on 08/09/2017.
 */
var Http = require('http');
var Router = require('router');

var PORT = 3010;

var counter = 0;
var messages = {};
var server;
var router = new Router( );

// initialisation du server
server = Http.createServer(function (request, response) {
    router( request, response, function( error ) {
        if( !error ) {
            response.writeHead( 404 );
            console.log('Taitement de requête');
        } else {
            //Handle errors
            console.log( error.message, error.stack );
            response.writeHead( 400 );
        }
        response.end( '\n' );
    });
});

server.listen(PORT, function () {
    console.log('Server listen on port ', PORT);
});
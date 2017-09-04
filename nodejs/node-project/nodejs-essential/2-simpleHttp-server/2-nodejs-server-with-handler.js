/**
 * Created by grouault on 04/09/2017.
 */
var Http = require('http');
var PORT = '8080';

var count = 0;
function requestHandler(request, response) {
    var message;
    count += 1;
    response.writeHead( 201, {
        'Content-Type': 'text/plain'
    });

    message = 'Visitor count: ' + count;
    console.log( message );
    response.end( message );
}

var server = Http.createServer(requestHandler);
server.listen(PORT, function () {
    console.log('Server listen on port ' + PORT);
});
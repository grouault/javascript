/**
 * Created by grouault on 06/09/2017.
 */
var Http = require('http');

var PORT = 3010;
var count = 0;

// Handler REQUEST
function requestHandler(request, response) {

    var message;
    var counterMessage;
    var status = 200;
    count += 1;

    response.writeHead(201, {
        'Content-Type': 'text/plain'
    });

    switch( request.url ) {
        case '/count':
            message = count.toString();
            break;
        case '/hello':
            message = 'world';
            break;
        default:
            status = 404;
            message = 'Not Found';
            break;
    }

    counterMessage = 'Visitor count: ' + count + ', path: ' + request.url;
    console.log(counterMessage);
    response.end( message );

}

// SERVER
var server = Http.createServer(requestHandler);
server.listen(PORT, function () {
   console.log('server listen on port :', PORT);
});
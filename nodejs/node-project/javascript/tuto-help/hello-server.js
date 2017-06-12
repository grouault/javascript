var PORT = 8080;

// module Http pour lancer le serveur
// module accessible à travers la variable http.
var http = require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.write('Hello world (mais en http)!');
  res.end();
});
server.listen(PORT);
console.log('Server running on ' + PORT);

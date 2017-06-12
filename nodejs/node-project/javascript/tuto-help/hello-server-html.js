var PORT = 8080;

// module Http pour lancer le serveur
// module accessible à travers la variable http.
var http = require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write(
    '<doctype html>' +
    '<html lang="fr">' +
    '<head><title>Page du serveur Node.js</title><meta charset="utf-8" /></head>' +
    '<body>' +
    '<h1>Hello!</h1>' +
    '<p>Ceci est une page html</p>' +
    '</body></html>'
  );
  res.end();
});
server.listen(PORT);
console.log('Server running on ' + PORT);

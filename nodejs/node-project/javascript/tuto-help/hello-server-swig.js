var PORT = 8080;

var http = require('http');
var swig = require('swig');

var server = http.createServer(function(req, res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write(swig.renderFile('templates/home.tpl', {name: 'Gildas'}));
  res.end();
});

server.listen(PORT);

console.log('Server running on ' + PORT);

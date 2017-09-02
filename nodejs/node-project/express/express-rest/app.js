/**
 * Created by grouault on 16/08/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');
var appRouter = require('./app/router/config.js');

var PORT = 3010;

/* instanciation server */
var server = express();
server.use(bodyParser.json());
// server.use(express.bodyParser()); // used to parse JSON object given in the request body


/* configuration routeur*/
appRouter.config(server);

/* launch SERVER */
server.listen(PORT, function () {
    console.log('Rest app listenning on port ' + PORT);
})
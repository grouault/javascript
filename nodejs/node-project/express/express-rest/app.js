/**
 * Created by grouault on 16/08/2017.
 */
var express = require('express');
var appRouter = require('./app/router/config.js');

var PORT = 3010;

/* instanciation server */
var server = express();

/* configuration routeur*/
appRouter.config(server);

/* launch SERVER */
server.listen(PORT, function () {
    console.log('Rest app listenning on port ' + PORT);
})
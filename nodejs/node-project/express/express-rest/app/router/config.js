/**
 * Created by grouault on 16/08/2017.
 */

var routerIndex = require('./index.js')
var routerPeople =  require('./people.js');
var routerCats =  require('./cats.js');

var config = function (server) {

    // route index
    server.use('/app/', routerIndex);

    // routes people
    server.use('/app/people', routerPeople)

    // routes cats
    server.use('/app/cats', routerCats);

};

exports.config = config;
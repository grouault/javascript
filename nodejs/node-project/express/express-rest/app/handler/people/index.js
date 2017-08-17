/**
 * Created by grouault on 17/08/2017.
 */
module.exports = function(){

    // service
    var peopleService = require('./../../services/people.js');;

    return {

        /**
         * remonte la liste de toutes les personnes.
         * @param req
         * @param resp
         */
        getAll: function (req, resp) {
            var peoples = peopleService.getAll();
            resp.json(peoples);
        },

        /**
         * remonte une personne à partir de son id.
         * @param req
         * @param resp
         */
        getById : function (req, resp) {
            var id = req.params.id;
            resp.json(peopleService.getById(id));
        }

    };

};

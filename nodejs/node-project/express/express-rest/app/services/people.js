/**
 * Created by grouault on 16/08/2017.
 */
var faker = require("faker");
var PEOPLES = [];

/**
 * initialisation des Personnes.
 * @returns {Array}
 */
var init = function() {
    if (PEOPLES.length === 0) {
        var i = 0;
        do {
            i += 1;
            var newPeople = {
                id: i,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            };
            console.log('newPeople = ', newPeople);
            PEOPLES.push(newPeople);
        } while (i < 5);
    }
    return PEOPLES;
};

/**
 * retourne toutes les personnes
 * @returns {Array}
 */
var getAll = function() {
  return init();
};

var getById = function (id) {
    init();
    console.log('PEOPLES = ', PEOPLES);
    return PEOPLES[id - 1];
};

exports.getAll =  getAll;
exports.getById = getById;

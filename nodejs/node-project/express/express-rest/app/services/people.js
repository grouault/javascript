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
};

/**
 * retourne toutes les personnes
 * @returns {Array}
 */
var getAll = function() {
    init()
    return PEOPLES;
};

var getById = function (id) {
    init();
    console.log('PEOPLES = ', PEOPLES);
    return PEOPLES[id - 1];
};

var add = function (person) {
    init();
    var lastIndex = PEOPLES.length;
    var newPeople = {
        id: lastIndex,
        name: person.name,
        avatar: faker.internet.avatar()
    };
    PEOPLES.push(newPeople);
    return PEOPLES;
};

exports.getAll =  getAll;
exports.getById = getById;
exports.add = add;
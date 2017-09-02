/**
 * Created by grouault on 17/08/2017.
 */
var express = require('express');
var router = express.Router();

var handlerPeople = require('./../handler/people/')();
var peopleService = require('./../services/people.js');

/* Routes - People */
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

/* GetAll */
router.get('/all', handlerPeople.getAll);

/* GetById */
router.get('/:id', handlerPeople.getById);

router.post('/', handlerPeople.add);

module.exports = router;




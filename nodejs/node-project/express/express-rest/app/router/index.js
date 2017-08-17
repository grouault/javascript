/**
 * Created by grouault on 17/08/2017.
 */
var express = require('express');
var router = express.Router();

/* Routes - default */
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

/* index */
router.get('/', function (req, resp) {
    resp.send('Application REST');
});

module.exports = router;
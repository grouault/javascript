/**
 * Created by grouault on 17/08/2017.
 */
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/bird', function(req, res) {
    res.send('Birds home page');
});

module.exports = router;
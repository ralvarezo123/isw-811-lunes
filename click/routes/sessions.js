var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    var session = req.session.value;
    console.log(session);
    //res.render('index', { session: session });
});

router.post('/', function (req, res, next) {
    req.session.value = req.body.value;
    res.send(req.session.value);
});


module.exports = router;

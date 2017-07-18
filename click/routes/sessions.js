var express = require('express');
var router = express.Router();


var criteria = function (req) {
    return { where: { id: req.params.id } };
}

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.format({
        html: function () {
            res.send(req.session.value);
        }
    });
});

router.post('/', function (req, res, next) {
    var value = req.body;
    console.log("-----------------");
    console.log(value);
    res.format({
        html: function () {
            req.session.value = value;
            res.send(req.session.value);
        }
    })
});


module.exports = router;

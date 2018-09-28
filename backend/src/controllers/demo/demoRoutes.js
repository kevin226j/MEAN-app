const router = require('express').Router();
const demoController = require('./demoController');

router.route('/')
    .get(demoController.get)
    .post(demoController.post);

router.route('/:id')
    .get(demoController.getById)
    .put(demoController.put)
    .delete(demoController._delete);    

module.exports = router;


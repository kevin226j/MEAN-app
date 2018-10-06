const router = require('express').Router();
const UploadController = require('./uploadController');

router.route('/')
    .post(UploadController.Upload);

module.exports = router;
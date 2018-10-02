const router = require('express').Router();
const gmailController = require('./gmailController');

router.route('/send')
    .post(gmailController.sendEmail);

module.exports = router;

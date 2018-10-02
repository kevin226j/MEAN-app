const router = require("express").Router();
const demoRoutes = require('../controllers/demo/demoRoutes');
const GmailRoute = require('../controllers/gmail/gmailRoute');

//configure api routes and controllers
router.use("/api/demo", demoRoutes);
router.use("/api/gmail", GmailRoute);

module.exports = router;
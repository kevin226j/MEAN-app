const router = require("express").Router();
const demoRoutes = require('../controllers/demo/demoRoutes');
const GmailRoute = require('../controllers/gmail/gmailRoute');
const UploadRoute = require('../controllers/upload/uploadRoute');

//configure api routes and controllers
router.use("/api/demo", demoRoutes);
router.use("/api/gmail", GmailRoute);
router.use("/api/image-upload", UploadRoute);

module.exports = router;
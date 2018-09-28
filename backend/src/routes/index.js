const router = require("express").Router();
const demoRoutes = require('../controllers/demo/demoRoutes');

//configure api routes and controllers
router.use("/api/demo", demoRoutes);

module.exports = router;
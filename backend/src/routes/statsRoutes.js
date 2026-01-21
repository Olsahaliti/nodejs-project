const router = require("express").Router();
const c = require("../controllers/statsController");

router.get("/dashboard", c.summary);

module.exports = router;
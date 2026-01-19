app.use("/api/students", studentRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/stats", statsRoutes);

const router = require("express").Router();
const c = require("../controllers/statsController");
router.get("/summary", c.summary);
module.exports = router;
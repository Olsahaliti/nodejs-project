app.use("/api/students", studentRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/stats", statsRoutes);


const router = require("express").Router();
const c = require("../controllers/studentController");

router.get("/", c.listStudents);
router.post("/", c.createStudent);
router.put("/:id", c.updateStudent);
router.delete("/:id", c.deleteStudent);

module.exports = router;

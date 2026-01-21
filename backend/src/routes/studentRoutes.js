// src/routes/studentRoutes.js
const router = require("express").Router();
const c = require("../controllers/studentController");
router.get("/", c.listStudents);
router.post("/", c.createStudent);
router.put("/:id", c.updateStudent);
router.delete("/:id", c.deleteStudent);
module.exports = router;
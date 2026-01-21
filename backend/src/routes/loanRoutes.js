const router = require("express").Router();
const c = require("../controllers/loanController");

router.get("/", c.getLoans);
router.post("/borrow", c.borrow);
router.put("/:id/return", c.returnBook);

module.exports = router;
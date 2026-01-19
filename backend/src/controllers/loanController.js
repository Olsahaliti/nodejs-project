const Book = require("../models/Book");
const Loan = require("../models/Loan");
async function borrow(req, res) {
  const { studentId, bookId } = req.body;
  const book = await Book.findById(bookId);
  if (!book) throw new Error("Book not found");
  if (book.availableCopies <= 0) {
    res.status(400);
    throw new Error("No copies available");
  }
  const loan = await Loan.create({ studentId, bookId, returnedAt: null });
  book.availableCopies -= 1;
  await book.save();
  res.status(201).json(loan);
}

async function returnBook(req, res) {
  const { loanId } = req.body;
  const loan = await Loan.findById(loanId);
  if (!loan) throw new Error("Loan not found");
  if (loan.returnedAt) {
    res.status(400);
    throw new Error("Already returned");
  }
  loan.returnedAt = new Date();
  await loan.save();
  const book = await Book.findById(loan.bookId);
  if (book) {
    book.availableCopies += 1;
    await book.save();
  }
  res.json({ message: "Returned successfully" });
}
module.exports = { borrow, returnBook };
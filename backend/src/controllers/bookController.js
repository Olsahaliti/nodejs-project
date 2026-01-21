const Book = require("../models/Book");
const { asyncHandler } = require("../utils/asyncHandler");

exports.getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find().sort({ createdAt: -1 });
  res.json(books);
});

exports.createBook = asyncHandler(async (req, res) => {
  // Keep availableCopies in sync with totalCopies when creating
  const payload = {
    ...req.body,
    availableCopies: req.body.availableCopies ?? req.body.totalCopies ?? 1,
  };
  const book = await Book.create(payload);
  res.status(201).json(book);
});

exports.updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
});

exports.deleteBook = asyncHandler(async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
});
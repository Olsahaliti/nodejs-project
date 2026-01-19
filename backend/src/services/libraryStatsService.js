// src/services/libraryStatsService.js
const Student = require("../models/Student");
const Book = require("../models/Book");
const Loan = require("../models/Loan");

async function getSummary() {
  const [totalStudents, totalBooks, borrowedNow] = await Promise.all([
    Student.countDocuments(),
    Book.countDocuments(),
    Loan.countDocuments({ returnedAt: null })
  ]);
  return { totalStudents, totalBooks, borrowedNow };
}
module.exports = { getSummary }
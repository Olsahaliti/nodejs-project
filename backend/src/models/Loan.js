// src/models/Loan.js
const mongoose = require("mongoose");
/*
Loan connects a Student to a Book.
returnedAt === null means 'currently borrowed'.
*/
const LoanSchema = new mongoose.Schema(
{
studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
borrowedAt: { type: Date, default: Date.now },
returnedAt: { type: Date, default: null }
},
{ timestamps: true }
);
module.exports = mongoose.model("Loan", LoanSchema);
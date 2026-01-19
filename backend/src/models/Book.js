// src/models/Book.js
const mongoose = require("mongoose");
/*
Book = an item in the library.
availableCopies helps prevent borrowing when 0.
*/
const BookSchema = new mongoose.Schema(
{
title: { type: String, required: true, trim: true },
author: { type: String, required: true, trim: true },
isbn: { type: String, trim: true },
availableCopies: { type: Number, default: 1, min: 0 }
},
{ timestamps: true }
);
module.exports = mongoose.model("Book", BookSchema);
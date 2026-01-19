// src/models/Student.js
const mongoose = require("mongoose");
/*
Student = a library member.
Keep it simple for beginners: name + email + className.
*/
const StudentSchema = new mongoose.Schema(
{
fullName: { type: String, required: true, trim: true },
email: { type: String, required: true, lowercase: true, unique: true },
className: { type: String, default: "General" }
},
{ timestamps: true }
);
module.exports = mongoose.model("Student", StudentSchema);
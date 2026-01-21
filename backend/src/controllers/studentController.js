
const Student = require("../models/Student");

async function listStudents(req, res) {
  const students = await Student.find().sort({ createdAt: -1 });
  res.json(students);
}

async function createStudent(req, res) {
  const { fullName, email, className } = req.body;

  if (!fullName || !email) {
    res.status(400);
    throw new Error("fullName and email are required");
  }
  const student = await Student.create({ fullName, email, className });
  res.status(201).json(student);
}

async function updateStudent(req, res) {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!student) {
    res.status(404);
    throw new Error("Student not found");
  }
  res.json(student);
}

async function deleteStudent(req, res) {
  const removed = await Student.findByIdAndDelete(req.params.id);
  if (!removed) {
    res.status(404);
    throw new Error("Student not found");
  }
  res.json({ message: "Student deleted" });
}
module.exports = { listStudents, createStudent, updateStudent, deleteStudent };
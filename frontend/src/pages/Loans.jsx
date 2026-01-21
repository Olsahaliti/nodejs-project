import { useEffect, useState } from "react";
import { api } from "../api/client";

function Loans() {
  const [loans, setLoans] = useState([]);
  const [students, setStudents] = useState([]);
  const [books, setBooks] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [bookId, setBookId] = useState("");

  async function loadData() {
    const [loanRes, studentRes, bookRes] = await Promise.all([
      api.get("/loans"),
      api.get("/students"),
      api.get("/books"),
    ]);
    setLoans(loanRes.data);
    setStudents(studentRes.data);
    setBooks(bookRes.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function borrowBook(e) {
    e.preventDefault();
    await api.post("/loans/borrow", { studentId, bookId });
    setStudentId("");
    setBookId("");
    loadData();
  }

  async function returnBook(id) {
    await api.put(`/loans/${id}/return`);
    loadData();
  }

  return (
    <div className="page">
      <h2>🔄 Loans</h2>

      <form className="form" onSubmit={borrowBook}>
        <select value={studentId} onChange={(e) => setStudentId(e.target.value)}>
          <option value="">Select student</option>
          {students.map((s) => (
            <option key={s._id} value={s._id}>
              {s.fullName}
            </option>
          ))}
        </select>

        <select value={bookId} onChange={(e) => setBookId(e.target.value)}>
          <option value="">Select book</option>
          {books.map((b) => (
            <option key={b._id} value={b._id}>
              {b.title} ({b.availableCopies})
            </option>
          ))}
        </select>

        <button>Borrow</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Book</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loans.map((l) => (
            <tr key={l._id}>
              <td>{l.studentId?.fullName}</td>
              <td>{l.bookId?.title}</td>
              <td>{l.returnedAt ? "Returned" : "Borrowed"}</td>
              <td>
                {!l.returnedAt && (
                  <button onClick={() => returnBook(l._id)}>Return</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Loans;
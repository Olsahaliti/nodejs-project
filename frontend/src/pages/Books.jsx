import { useEffect, useState } from "react";
import { api } from "../api/client";
import '../style/books.css'

function Books() {

  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [copies, setCopies] = useState(1);

  async function loadBooks() {
    const res = await api.get("/books");
    setBooks(res.data);
  }

  useEffect(() => {
    loadBooks();
  }, []);

  async function addBook(e) {
    e.preventDefault();
    await api.post("/books", {
      title,
      author,
      availableCopies: copies,
    });
    setTitle("");
    setAuthor("");
    setCopies(1);
    loadBooks();
  }

  async function deleteBook(id) {
    await api.delete(`/books/${id}`);
    loadBooks();
  }

  return (
    <div className="page">
      <h2>📘 Books</h2>

      <form className="form" onSubmit={addBook}>
        <input className="title"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input className="author"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input className="number"
          type="number"
          min="1"
          value={copies}
          onChange={(e) => setCopies(e.target.value)}
        />
        <button className="add">Add Book</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Available</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b._id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.availableCopies}</td>
              <td>
                <button className="danger" onClick={() => deleteBook(b._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
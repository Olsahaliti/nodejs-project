import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
      <b>Scantech Library</b> &nbsp;|&nbsp;
      <Link to="/">Dashboard</Link> &nbsp;|&nbsp;
      <Link to="/students">Students</Link> &nbsp;|&nbsp;
      <Link to="/books">Books</Link> &nbsp;|&nbsp;
      <Link to="/loans">Loans</Link>
    </nav>
  );
}
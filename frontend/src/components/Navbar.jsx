import { Link } from "react-router-dom";
import '../App.css'
export default function Navbar() {
  return (
    <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }} className="navbar-test">
      <b>Scantech Library</b> &nbsp;|&nbsp;
      <Link to="/dashboard">Dashboard</Link> &nbsp;|&nbsp;
      <Link to="/students">Students</Link> &nbsp;|&nbsp;
      <Link to="/books">Books</Link> &nbsp;|&nbsp;
      <Link to="/loans">Loans</Link>
    </nav>
  );
}
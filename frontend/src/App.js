import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Books from "./pages/Books";
import Loans from "./pages/Loans";
import '../src/App.css'
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: 16 }}>
        <Routes>
           <Route path="/" element={<Dashboard />} />
           <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/books" element={<Books />} />
          <Route path="/loans" element={<Loans />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

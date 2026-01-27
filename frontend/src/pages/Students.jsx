import { useEffect, useState } from "react";
import { api } from "../api/client";
import '../App.css'

export default function Students() {
  const [items, setItems] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  async function load()  {
    const res = await api.get("/students");
    setItems(res.data);
  }

  useEffect(() => { load(); }, []);

  async function addStudent(e) {
    e.preventDefault();
    await api.post("/students", { fullName, email });
    setFullName(""); setEmail("");
    load();
  }

   async function removeStudent(id) {
    await api.delete("/students/" + id);
    load();
  }

  return (
    <div>
      <h2>Students</h2>
      <form onSubmit={addStudent} style={{ marginBottom: 12 }}>
        <input value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Full name" />
        {" "}
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        {" "}
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map(s => (
          <li key={s._id}>
            {s.fullName} ({s.email})
            {" "}
            <button onClick={() => removeStudent(s._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );



}
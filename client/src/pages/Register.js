import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/users/register", form);
      alert(res.data.message);
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />

        <select name="role" onChange={handleChange}>
          <option value="candidate">Candidate</option>
          <option value="recruiter">Recruiter</option>
        </select>
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

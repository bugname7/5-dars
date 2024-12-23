import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigator = useNavigate();
  const location = useLocation();

  function validate() {
    if (username.length <= 2) {
      alert("Ism juda qisqa");
      return false;
    }
    if (email.length <= 5) {
      alert("Email juda qisqa");
      return false;
    }
    if (password.length <= 3) {
      alert("Password 4ta belgidan ko'p bo'lishi kerak");
      return false;
    }
    if (rePassword !== password) {
      alert("Parollar mos emas");
      return false;
    }
    return true;
  }

  function handleSave(e) {
    e.preventDefault();
    if (!validate()) return;

    const user = { username, email, password };
    setLoading(true);

    axios
      .post(`https://auth-rg69.onrender.com/api/auth/signup`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigator("/sign");
        }
      })
      .catch((error) => {
        if (error.response) {
          alert(
            `Xato: ${error.response.data.message || error.response.statusText}`
          );
        } else {
          alert("Tarmoq xatosi. Iltimos, qayta urinib ko'ring.");
        }
      })
      .finally(() => {
        setLoading(false);
        setUserName("");
        setEmail("");
        setPassword("");
        setRePassword("");
      });
  }

  return (
    <div>
      <form
        onSubmit={handleSave}
        className="bg-blue-300 w-[400px] shadow-md mx-auto p-5 text-center mt-20 rounded-md"
      >
        <h2 className="text-2xl font-medium mb-5">REGISTER</h2>
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Username"
          className="w-full py-2 rounded-md mb-3 px-4 focus:outline-none shadow-md"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full py-2 rounded-md mb-3 px-4 focus:outline-none shadow-md"
        />
        <div className="flex text-center justify-between">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Password"
            className="w-[92%] py-2 rounded-md mb-3 px-4 focus:outline-none shadow-md"
          />
          <span
            onClick={() => {
              setShow(!show);
            }}
            className="bg-white text-center items-center py-2 h-10 rounded-md px-2 cursor-pointer font-bold"
          >
            {show ? "X" : "O"}
          </span>
        </div>
        <input
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          type={show ? "text" : "password"}
          placeholder="Re-enter Password"
          className="w-full py-2 rounded-md mb-3 px-4 focus:outline-none shadow-md"
        />
        <button
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 mb-3"
          disabled={loading}
        >
          {loading ? "Loading..." : "Register"}
        </button>
        <Link to="/sign" className="hover:underline">
          Login
        </Link>
      </form>
    </div>
  );
}

export default Register;

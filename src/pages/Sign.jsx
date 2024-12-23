import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Sign() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function validate() {
    if (username.length <= 3) {
      alert("username qisqa ");
      return false;
    }
    if (password.length <= 3) {
      alert("Password juda ham qisqa");
      return false;
    }
    return true;
  }
  function handleSave(e) {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    const user = {
      username,
      password,
    };
    setLoading(true);
    axios
      .post(`https://auth-rg69.onrender.com/api/auth/signin`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status == 200) {
          console.log("login amalga oshdi");
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("token", response.data.accessToken);
          navigate("/", { state: { token: response.data.accessToken } });
        }
      })
      .catch((error) => {
        if (error.status == 404 || error.status == 401) {
          alert(error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="border-spacing-3 ">
      <form
        onSubmit={handleSave}
        className="bg-blue-300 p-5 w-[400px] mx-auto rounded-md mt-20 text-center"
      >
        <h2 className="text-2xl font-medium mb-5">LOGIN</h2>
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Username"
          className="w-full mb-4 py-2 px-5 rounded-md shadow-md focus:outline-none"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full mb-4 py-2 px-5 rounded-md shadow-md focus:outline-none"
        />
        <br />
        <button className="bg-green-600 rounded-md hover:bg-green-700 text-white py-2 px-20">
          {loading ? "Loading..." : "Login"}
        </button>
        <br />
        <Link to={"/register"} className="hover:underline">
          Register
        </Link>
      </form>
    </div>
  );
}

export default Sign;

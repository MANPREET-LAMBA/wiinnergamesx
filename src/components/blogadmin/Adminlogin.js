import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Adminlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const weburl = "http://localhost:3001/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${weburl}api/admin/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setMessage("✅ Login successful!");
      navigate("/admin")
      // redirect to admin dashboard
      window.location.href = "/admin";
    } catch (err) {
      console.log(err);
      
      setMessage("❌ " + err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          
        >
          Login
        </button>

        {message && (
          <p className="text-center mt-4 text-gray-600 font-medium">{message}</p>
        )}
      </form>
    </div>
  );
};

export default Adminlogin;

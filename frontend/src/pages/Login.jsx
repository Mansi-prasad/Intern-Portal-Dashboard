import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login) {
      if (!email.trim() || !password.trim()) {
        toast.error("Please enter email and password.");
        return;
      }
    } else {
      if (!name.trim() || !email.trim() || !password.trim()) {
        toast.error("Please fill all the fields.");
        return;
      }
    }
    navigate("/dashboard");
  };

  return (
    <div className="mt-10">
      <div className="m-auto mt-4 sm:w-11/12 md:w-2/8 shadow-sm shadow-gray-400 p-6">
        <h2 className="text-center text-xl font-bold text-green-800">
          Intern Portal {login ? "Login" : "Register"}
        </h2>
        <form onSubmit={handleSubmit}>
          {login ? (
            ""
          ) : (
            <div className="mb-3">
              <label htmlFor="uname">Name</label>
              <input
                id="uname"
                type="text"
                placeholder="Enter name"
                value={name}
                className="w-full border border-gray-700 rounded p-2 focus:outline-none"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              className="w-full border border-gray-700 rounded p-2 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pass">Password</label>
            <input
              id="pass"
              type="password"
              placeholder="Enter password"
              value={password}
              className="w-full border border-gray-700 rounded p-2 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
            {login ? "Haven't account yet? " : "Already have an account? "}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setLogin((prev) => !prev);
              }}
              className="text-blue-700"
            >
              {login ? "Register here.." : "Login here.."}
            </a>
          </div>
          <div>
            <button className="w-full p-2 rounded bg-green-800 text-white">
              {login ? "Login" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

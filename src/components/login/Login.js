import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";

export default function Login() {
  const navigateTo = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    let correctPassword = window.localStorage.getItem(email);
    if (password === correctPassword) navigateTo("home");
    else
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<em>Username and Password do not match!</em>",
      });
  }

  return (
    <>
      <div className="container">
        <form>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Email address :{" "}
            </label>
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Password :{" "}
            </label>
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={handleLogin}
          >
            Sign in
          </button>

          <div className="signup">
            New User ?<br />
            <button
              type="button"
              id="signUp"
              className="btn btn-outline-warning btn-md"
              onClick={() => {
                navigateTo("signup");
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

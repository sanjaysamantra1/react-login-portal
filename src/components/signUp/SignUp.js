import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignUp() {
  const navigateBack = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    console.log("console reached");
    Swal.fire({
      title: "Perfect!",
      text: "Would you like to Login?",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, take me to Login Page!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigateBack("/");
      }
    });

    localStorage.setItem(email, password);
  }

  return (
    <>
      <form>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationServer01">First name</label>
            <input
              type="text"
              className="form-control"
              id="validationServer01"
              placeholder="First name"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationServer02">Last name</label>
            <input
              type="text"
              className="form-control"
              id="validationServer02"
              placeholder="Last name"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationServerUsername">Email Address</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend3">
                  @
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                id="validationServerUsername"
                placeholder="Email Address"
                aria-describedby="inputGroupPrepend3"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationServer03">Password</label>
            <input
              type="password"
              className="form-control"
              id="validationServer03"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button className="btn btn-primary" onClick={handleRegister}>
          Submit form
        </button>
      </form>
    </>
  );
}

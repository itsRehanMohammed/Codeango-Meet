import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Signup = () => {
  const handleSubmit = (event) => {
    toast.success("Account Created successfully!");
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      phone: data.get("phone"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirm-password"),
    });
  };
  return (
    <>
      <Navbar />

      <div className="Signup">
        <div className="signup-form-wrapper">
          <div className="signup-head">
            <span className="lock-icon">
              {" "}
              <LockOutlinedIcon />
            </span>
            <h2>Sign Up</h2>
          </div>
          <form action="" onSubmit={handleSubmit} className="form">
            <div className="signup-phone">
              <TextField required autoComplete="true" className="input-phone" id="input-phone" label="Phone no" name="phone" type="number" />
            </div>

            <div className="signup-email">
              <TextField required autoComplete="true" className="input-email" id="input-email" label="Email" name="email" type="email" />
            </div>
            <div className="signup-password">
              <TextField required autoComplete="true" className="input-password" id="input-password" label="Password" name="password" type="password" />
            </div>
            <div className="signup-confirm-password">
              <TextField required autoComplete="true" className="input-confirm-password" id="input-confirm-password" label="Confirm Password" name="confirm-password" type="password" />
            </div>
            <div className="signup-button">
              <button type="submit" className="input-button">
                {/* {spinner ? <TailSpin height={25} color="#fff" wrapperStyle={{ justifyContent: "center" }} /> : "SIGN UP"} */}
                SIGN UP
              </button>
            </div>
            <ToastContainer />
          </form>
          <div className="extra-usefull-links">
            <Link to="/login">Already have an account? Login in</Link>
          </div>
          <div className="signup-copyright">
            <p>
              Copyright © <Link to="/">Codeango Meet</Link> {new Date().getFullYear()}{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Signup;

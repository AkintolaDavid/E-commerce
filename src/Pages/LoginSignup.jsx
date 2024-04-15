import React from "react";
import "./LoginSignup.css";
export const LoginSignup = () => {
  return (
    <div className="LoginSignup">
      <div className="LoginSignup_container">
        <h1>Sign Up</h1>
        <div className="LoginSignup_inputField">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="LoginSignup_login">
          Already have an account?<span>Login here</span>
        </p>
        <div className="LoginSignup_agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing I agree to every terms and conditions</p>
        </div>
      </div>
    </div>
  );
};

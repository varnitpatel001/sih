import React from "react";
import "./substyle.css";

const Login = () => {
  return (
    <div className="login-container">
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="passw">Password</label>
          <input type="text" name="passw" id="passw" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

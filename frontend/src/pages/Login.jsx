import React from "react";
// import * as dotenv from "dotenv";
// dotenv.config();

import { useNavigate } from "react-router-dom";

// console.log(dotenv.USERNAME);

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login">
      <div className="container">
        <form
          className="standart-form standart-form_black"
          onSubmit={handleSubmit}
        >
          <input type="text" name="username" placeholder="USERNAME" />
          <input type="password" name="password" placeholder="PASSWORD" />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

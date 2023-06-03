import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  password: ""
}

const Login = ({isLogged, setIsLogged}) => {
  const navigate = useNavigate();

  const [state, setState] = useState(initialState);

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.username === 'stal' && state.password === 'stal') {
      setIsLogged(true);
      navigate("/");
    } else {
      alert("Invalid username or password");
      setState(initialState);
    }

  };

  return (
    <div className="login">
      <div className="container">
        <form
          className="standart-form standart-form_black"
          onSubmit={handleSubmit}
        >
          <input type="text" name="username" placeholder="USERNAME" value={state.username} onChange={handleInputChange}/>
          <input type="password" name="password" placeholder="PASSWORD" value={state.password} onChange={handleInputChange}/>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import { loginRequest } from '../redux/actions/user';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const AppLogin = ({ onLogin }) => {

  const history = useHistory();

  let defaultState = {
    email: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(defaultState);
  const dispatch = useDispatch();

  const handleRedirect = () => {
    history.push("/movies");
    onLogin();
  };

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginRequest({data: credentials, redirect: handleRedirect}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default AppLogin;
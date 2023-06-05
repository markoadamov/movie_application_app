import React from 'react';
import { registerRequest } from '../redux/actions/user';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const AppRegister = ({ onRegister }) => {

  const history = useHistory();

  let defaultState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(defaultState);
  const dispatch = useDispatch();

  const handleRedirect = () => {
    history.push("/login");
    // onRegister();
  };

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(registerRequest({data: credentials, redirect: handleRedirect}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register:</h1>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={credentials.first_name}
          onChange={(e) => setCredentials({ ...credentials, first_name: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={credentials.last_name}
          onChange={(e) => setCredentials({ ...credentials, last_name: e.target.value })}
          required
        />
      </div>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default AppRegister;
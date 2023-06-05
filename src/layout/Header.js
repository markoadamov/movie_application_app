import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../redux/actions/user";

export default function Header({ isAuthenticated, setIsAuthenticated }) {
  const dispatch = useDispatch();

  async function handleLogout() {
    dispatch(logoutRequest(setIsAuthenticated))
  }

  console.log(isAuthenticated);

  return (
    <nav className="navigation">
      <div>
        {!isAuthenticated && (
          <>
            <label> || </label>
            <Link to="/register">
              <button className="navigationButtons">Register</button>
            </Link>
          </>
        )}
        {isAuthenticated && (
          <>
            <label> || </label>
            <button className="navigationButtons" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
        {!isAuthenticated && (
          <>
            <label> || </label>
            <Link to="/login">
              <button className="navigationButtons">Login</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

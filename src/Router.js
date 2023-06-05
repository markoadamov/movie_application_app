import { Switch } from "react-router-dom";
import React from "react";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import AppLogin from "./pages/AppLogin";
import AppRegister from "./pages/AppRegister";
import AppMovies from "./pages/AppMovies";

export default function Router({setIsAuthenticated}) {
    return (
      <div>
        <Switch>
          <PublicRoute exact path="/login">
            <AppLogin onLogin={() => {setIsAuthenticated(true) }}/>
          </PublicRoute>
          <PublicRoute exact path="/register">
            <AppRegister onRegister={() => {setIsAuthenticated(true) }}/>
          </PublicRoute>
          <PrivateRoute exact path="/movies">
            <AppMovies />
          </PrivateRoute>
        </Switch>
      </div>
    );
  }
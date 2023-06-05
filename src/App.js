import React, { useState } from 'react';
import Page from "./layout/Page";
import Router from "./Router";

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <div>
      <Page
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      >
      <Router setIsAuthenticated={setIsAuthenticated} />
      </Page>
    </div>
  );
};

export default App;
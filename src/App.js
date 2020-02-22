import React from "react";
import LandingPage from "./components/pages/LandingPage";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/splash" component={LandingPage} />
    </Switch>
  );
}

export default App;

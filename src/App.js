import React from "react";
import LandingPage from "./components/pages/LandingPage";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <Switch>
      <Route exact path="/:tab" component={Dashboard} />
      <Route exact path="/splash" component={LandingPage} />
      <Redirect to="/profile" />
    </Switch>
  );
}

export default App;

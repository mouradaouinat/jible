import React from "react";
import LandingPage from "./components/pages/LandingPage";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <Switch>
      <Route exact path="/home" component={LandingPage} />
      <Route path="/dashboard/:setting" component={Dashboard} />
      <Redirect to="/home" />
    </Switch>
  );
}

export default App;

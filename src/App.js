import React from "react";
import LandingPage from "./components/pages/LandingPage";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import About from "./components/pages/About";

function App() {
  return (
    <Switch>
      <Route exact path="/home" component={LandingPage} />
      <Route exact path="/about" component={About} />
      <Route path="/dashboard/:setting" component={Dashboard} />
      <Redirect to="/home" />
    </Switch>
  );
}

export default App;

import React, { useContext } from "react";
import { Router } from "@reach/router";
import LandingPage from "./components/pages/LandingPage";
import Dashboard from "./components/pages/Dashboard";
import About from "./components/pages/About";
import Settings from "./components/Settings";
import RequestSekhra from "./components/RequestSekhra";
import DeliverSekhra from "./components/DeliverSekhra";
import { UserContext } from "./context/userContext";
import Profile from "./components/Profile";
import Adresses from "./components/Adresses";
import Statistics from "./components/Statistics";

function App() {
  const { user } = useContext(UserContext);
  return (
    <Router>
      <LandingPage path="/" />
      <About path="about" />
      <Dashboard path="dashboard">
        {user.role === "customer" ? (
          <RequestSekhra path="request" />
        ) : (
          <DeliverSekhra path="deliver" />
        )}
        <Settings path="settings">
          <Profile path="profile" />
          <Adresses path="addresses" />
          <Statistics path="statistics" />
        </Settings>
      </Dashboard>
    </Router>
  );
}

export default App;

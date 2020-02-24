import React from "react";
import DashboardHeader from "../layout/DashboardHeader";
import Profile from "../Profile";
import { Switch, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
};

export default Dashboard;

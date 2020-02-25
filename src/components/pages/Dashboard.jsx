import React from "react";
import DashboardHeader from "../layout/DashboardHeader";
import Profile from "../Profile";
import { Switch, Route } from "react-router-dom";
import Footer from "../layout/Footer";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <DashboardHeader />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Dashboard;

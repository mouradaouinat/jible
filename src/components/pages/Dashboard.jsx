import React from "react";
import DashboardHeader from "../layout/DashboardHeader";
import Footer from "../layout/Footer";
import Settings from "../Settings";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import RequestSekhra from "../RequestSekhra";

const Dashboard = () => {
  const { path } = useRouteMatch();
  return (
    <div className="flex flex-col min-h-screen w-screen overflow-hidden">
      <DashboardHeader />
      <Switch>
        <Route path={`${path}/request`} component={RequestSekhra} />
        <Route path={`${path}/settings`} component={Settings} />
        <Redirect to={`${path}/request`} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Dashboard;

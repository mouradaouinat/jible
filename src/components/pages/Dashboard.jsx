import React, { useContext } from "react";
import DashboardHeader from "../layout/DashboardHeader";
import Footer from "../layout/Footer";
import Settings from "../Settings";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import RequestSekhra from "../RequestSekhra";
import DeliverSekhra from "../DeliverSekhra";
import { UserContext } from "../../context/userContext";

const Dashboard = () => {
  const { path } = useRouteMatch();
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-hidden">
      <DashboardHeader />
      <Switch>
        {user.role === "customer" ? (
          <Route path={`${path}/request`} component={RequestSekhra} />
        ) : (
          <Route path={`${path}/deliver`} component={DeliverSekhra} />
        )}

        <Route path={`${path}/settings`} component={Settings} />

        {user.role === "customer" ? (
          <Redirect to={`${path}/request`} />
        ) : (
          <Redirect to={`${path}/deliver`} />
        )}
      </Switch>
      <Footer />
    </div>
  );
};

export default Dashboard;

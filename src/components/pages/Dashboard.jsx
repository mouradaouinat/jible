import React from "react";
import DashboardHeader from "../layout/DashboardHeader";
import Profile from "../Profile";
import { Switch, Route, NavLink } from "react-router-dom";
import { ReactComponent as Helmet } from "../../assets/helmet.svg";
import Footer from "../layout/Footer";
import Statistics from "../Statistics";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <DashboardHeader />
      <div className="sm:flex px-4 w-screen sm:max-w-screen-sm sm:mx-auto md:max-w-screen-md lg:max-w-screen-lg mt-10 ">
        <div className="hidden md:flex md:flex-col">
          <NavLink
            to="/"
            className="w-56 py-4 px-6 text-lg rounded-md"
            activeClassName="bg-green text-white"
            exact
          >
            Sekhrat TODO
          </NavLink>
          <NavLink
            to="/profile"
            className="w-56 py-4 px-6 text-lg rounded-md"
            activeClassName="bg-green text-white"
          >
            My Profile
          </NavLink>
          <NavLink
            to="/statistics"
            className="w-56 py-4 px-6 text-lg rounded-md"
            activeClassName="bg-green text-white"
          >
            Statistics
          </NavLink>
        </div>
        <div className="sm:w-64 md:w-56 lg:w-72 sm:mr-auto md:mx-auto">
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
          </Switch>
        </div>
        <button className="hidden sm:block  bg-green text-white h-full w-56 px-3 pt-8 pb-3 text-left rounded-md">
          <Helmet className="fill-current text-white mb-1 mt-4" />
          <span>request a sekhra</span>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

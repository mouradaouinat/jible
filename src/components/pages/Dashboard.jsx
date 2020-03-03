import React from "react";
import DashboardHeader from "../layout/DashboardHeader";
import Footer from "../layout/Footer";

const Dashboard = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-screen overflow-hidden">
      <DashboardHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Dashboard;

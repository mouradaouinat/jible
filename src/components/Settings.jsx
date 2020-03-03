import React, { useContext } from "react";
import { navigate } from "@reach/router";
import { ReactComponent as Helmet } from "../assets/helmet.svg";
import { ReactComponent as Arrow } from "../assets/arrow-white.svg";
import { ReactComponent as Pen } from "../assets/pen.svg";
import { UserContext } from "../context/userContext";
import Navlink from "./Navlink";

const Settings = ({ children }) => {
  const { user, navLinks } = useContext(UserContext);

  return (
    <div className="sm:flex px-4 w-screen sm:max-w-screen-sm sm:mx-auto md:max-w-screen-md lg:max-w-screen-lg mt-10 ">
      <div className="hidden md:flex md:flex-col">
        {user.role === "driver"
          ? navLinks.driver.map((navlink, idx) => (
              <Navlink
                key={idx}
                to={navlink.path}
                defaultClassName="w-56 py-4 px-6 text-lg rounded-md"
                activeClassName="w-56 py-4 px-6 text-lg rounded-md bg-green text-white"
              >
                {navlink.name}
              </Navlink>
            ))
          : navLinks.customer.map((navlink, idx) => (
              <Navlink
                key={idx}
                to={navlink.path}
                defaultClassName="w-56 py-4 px-6 text-lg rounded-md"
                activeClassName="w-56 py-4 px-6 text-lg rounded-md bg-green text-white"
              >
                {navlink.name}
              </Navlink>
            ))}
      </div>
      <div className="sm:w-64 md:w-56 lg:w-72 sm:mr-auto md:mx-auto">
        {children}
      </div>
      <button
        className="hidden sm:block  bg-green text-white h-full w-56 px-3 pt-8 pb-3 text-left rounded-md"
        onClick={() =>
          user.role === "customer"
            ? navigate("/dashboard/request")
            : navigate("/dashboard/deliver")
        }
      >
        {user.role === "driver" ? (
          <Helmet className="fill-current text-white mt-4 h-10 w-10" />
        ) : (
          <Pen className="fill-current text-white mt-4 h-10 w-10" />
        )}
        <div className="flex justify-between items-center mt-3">
          <span className="text-sm">
            {user.role === "driver" ? "Pick up" : "Request"} a Sekhra
          </span>
          <Arrow />
        </div>
      </button>
    </div>
  );
};

export default Settings;

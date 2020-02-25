import React, { useState, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/logo-black.svg";
import { ReactComponent as Burger } from "../../assets/burger.svg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [switchIsOn, setSwitchIsOn] = useState(true);
  const { user } = useContext(UserContext);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-screen">
      <header className="py-6 px-4 flex items-center justify-between">
        <div>
          <Logo className="h-6 w-auto" />
        </div>
        <div className="flex items-center justify-between">
          <button type="button" className="mr-4 px-2 py-1">
            <Bell />
          </button>
          <button type="button" className="p-2" onClick={toggle}>
            <Burger />
          </button>
        </div>
      </header>
      {isOpen && (
        <div className="bg-green h-full w-64 absolute top-0 right-0 shadow-2xl py-6 px-4">
          <div>
            <button
              type="button"
              className="text-white text-xl"
              onClick={toggle}
            >
              &#x2715;
            </button>
          </div>
          <div className="flex items-center mt-10">
            <img
              src={user.img}
              alt="profile"
              className="rounded-full w-10 h-10 object-cover object-center"
            />
            <span className="text-white ml-4 text-xl">{user.name}</span>
          </div>
          {user.role === "driver" ? (
            <div className="mt-10 flex flex-col">
              <NavLink
                to="/"
                className="text-white py-4 px-6 text-lg hover:bg-white hover:text-black rounded-md"
              >
                Sekhrat TODO
              </NavLink>
              <NavLink
                to="/profile"
                className="text-white py-4 px-6 text-lg hover:bg-white hover:text-black rounded-md"
                activeClassName="bg-white text-black"
              >
                My Profile
              </NavLink>
              <NavLink
                to="/statistics"
                className="text-white py-4 px-6 text-lg hover:bg-white hover:text-black rounded-md"
              >
                Statistics
              </NavLink>
            </div>
          ) : (
            <div className="mt-10 flex flex-col">
              <NavLink
                to="/"
                className="text-white py-4 px-6 text-lg hover:bg-white hover:text-black rounded-md"
              >
                My Sekhra
              </NavLink>
              <NavLink
                to="/profile"
                className="text-white py-4 px-6 text-lg hover:bg-white hover:text-black rounded-md"
                activeClassName="bg-white text-black"
              >
                My Profile
              </NavLink>
              <NavLink
                to="/statistics"
                className="text-white py-4 px-6 text-lg hover:bg-white hover:text-black rounded-md"
              >
                My Adresses
              </NavLink>
            </div>
          )}
          {user.role === "driver" ? (
            <div className="mt-20 px-6">
              <p className="text-white text-lg">Availability</p>
              <div
                className="border border-white h-8 w-20 rounded-full mt-5 relative"
                onClick={() => setSwitchIsOn(!switchIsOn)}
              >
                <div className="absolute inset-0 p-2 flex justify-between items-center">
                  <span className="text-white text-xs">On</span>
                  <span className="text-white text-xs">Off</span>
                </div>
                <div
                  className={`bg-white rounded-full h-8 w-8 ${
                    switchIsOn ? "float-right" : "float-left"
                  } shadow-md`}
                ></div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;

import React, { useState, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/logo-black.svg";
import { ReactComponent as Burger } from "../../assets/burger.svg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);

  function toggle() {
    setIsOpen(!isOpen);
  }

  function onIsAvailableChange() {
    setUser(prevValue => {
      return { ...prevValue, isAvailable: !user.isAvailable };
    });
  }

  return (
    <div className="w-screen">
      <header className="py-6 px-4 flex items-center justify-between sm:max-w-screen-sm sm:mx-auto md:max-w-screen-md lg:max-w-screen-lg sm:relative sm:py-4">
        <div>
          <Logo className="h-6 w-auto sm:h-8" />
        </div>
        <div className="flex items-center justify-between">
          <button type="button" className="mr-4 px-2 py-1">
            <Bell />
          </button>
          <button type="button" className="p-2 sm:hidden" onClick={toggle}>
            <Burger />
          </button>
          <div className="hidden sm:flex items-center">
            <button onClick={toggle} className="focus:outline-none">
              <img
                src={user.img}
                alt="profile"
                className="rounded-full h-10 w-10 object-center object-cover"
              />
            </button>
            <span className="ml-4 text-md">{user.name}</span>
          </div>
        </div>

        {isOpen && (
          <div className="bg-green h-full w-64 absolute top-0 right-0 shadow-2xl py-6 px-4 sm:mt-20 sm:p-0 sm:rounded-md sm:shadow-none">
            <div className="relative sm:border sm:border-gray-100 sm:rounded-md sm:bg-white sm:px-6 sm:py-4 sm:shadow-2xl z-50">
              <div className="sm:hidden">
                <button
                  type="button"
                  className="text-white text-xl"
                  onClick={toggle}
                >
                  &#x2715;
                </button>
              </div>
              <div className="flex items-center mt-10 sm:mt-0">
                <img
                  src={user.img}
                  alt="profile"
                  className="rounded-full w-10 h-10 object-cover object-center sm:h-8 sm:w-8"
                />
                <span className="text-white ml-4 text-xl sm:text-gray-900 sm:text-sm">
                  {user.name}
                </span>
              </div>
              {user.role === "driver" ? (
                <div className="mt-10 flex flex-col">
                  <NavLink
                    to="/"
                    className="text-white py-4 px-6 text-lg hover:bg-white hover:text-black rounded-md sm:text-gray-900 sm:text-sm sm:hover:bg-blue-light sm:hover:text-white"
                  >
                    Sekhrat TODO
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className="text-white py-4 px-6 text-lg hover:bg-white hover:text-black rounded-md sm:text-gray-900 sm:text-sm sm:hover:bg-blue-light sm:hover:text-white"
                    activeClassName="bg-white text-black"
                  >
                    My Profile
                  </NavLink>
                  <NavLink
                    to="/statistics"
                    className="text-white py-4 px-6 text-lg hover:bg-white hover:text-black rounded-md sm:text-gray-900 sm:text-sm sm:hover:bg-blue-light sm:hover:text-white"
                  >
                    Statistics
                  </NavLink>
                </div>
              ) : (
                <div className="mt-10 flex flex-col">
                  <NavLink
                    to="/"
                    className="text-white py-4 px-6 text-lg hover:bg-white hover:text-black rounded-md sm:text-gray-900 sm:text-sm sm:hover:bg-blue-light sm:hover:text-white"
                  >
                    My Sekhra
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className="text-white py-4 px-6 text-lg hover:bg-white hover:text-black rounded-md sm:text-gray-900 sm:text-sm sm:hover:bg-blue-light sm:hover:text-white"
                    activeClassName="bg-white text-black"
                  >
                    My Profile
                  </NavLink>
                  <NavLink
                    to="/statistics"
                    className="text-white py-4 px-6 text-lg hover:bg-white hover:text-black rounded-md sm:text-gray-900 sm:text-sm sm:hover:bg-blue-light sm:hover:text-white"
                  >
                    My Adresses
                  </NavLink>
                </div>
              )}
              {user.role === "driver" ? (
                <div className="mt-20 px-6 sm:mt-6">
                  <p className="text-white text-lg sm:text-gray-900 sm:text-sm">
                    Availability
                  </p>
                  <div
                    className="border border-white h-8 w-20 rounded-full mt-5 relative sm:border-green"
                    onClick={onIsAvailableChange}
                  >
                    <div className="absolute inset-0 p-2 flex justify-between items-center">
                      <span className="text-white text-xs sm:text-green">
                        On
                      </span>
                      <span className="text-white text-xs sm:text-green">
                        Off
                      </span>
                    </div>
                    <div
                      className={`bg-white rounded-full h-8 w-8 sm:bg-green ${
                        user.isAvailable ? "float-right" : "float-left"
                      } shadow-md`}
                    ></div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </header>
      {isOpen && (
        <button
          className="absolute h-screen w-screen inset-0 z-30 cursor-default focus:outline-none"
          onClick={toggle}
        ></button>
      )}
    </div>
  );
};

export default DashboardHeader;

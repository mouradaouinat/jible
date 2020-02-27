import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { NavLink, withRouter } from "react-router-dom";

const Menu = ({ toggle, history }) => {
  const { user, setUser, navLinks } = useContext(UserContext);

  function onIsAvailableChange() {
    setUser(prevValue => {
      return { ...prevValue, isAvailable: !user.isAvailable };
    });
  }

  function signOut() {
    history.push("/");
  }

  return (
    <div className="bg-green h-full w-64 absolute z-50 top-0 right-0 shadow-2xl py-6 px-4 sm:mt-20 sm:p-0 sm:bg-transparent sm:shadow-none">
      <div className="relative sm:border sm:border-gray-100 sm:rounded-md sm:bg-white sm:px-6 sm:py-4 sm:shadow-2xl z-50">
        <div className="sm:hidden">
          <button type="button" className="text-white text-xl" onClick={toggle}>
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
        <div className="mt-10 flex flex-col">
          {user.role === "driver"
            ? navLinks.driver.map((navLink, idx) => (
                <NavLink
                  key={idx}
                  to={navLink.path}
                  className="text-white py-4 px-6 text-lg hover:bg-white hover:text-black rounded-md sm:text-gray-900 sm:text-sm sm:hover:bg-blue-light sm:hover:text-white"
                >
                  {navLink.name}
                </NavLink>
              ))
            : navLinks.customer.map((navLink, idx) => (
                <NavLink
                  key={idx}
                  to={navLink.path}
                  className="text-white py-4 px-6 text-lg hover:bg-white hover:text-black rounded-md sm:text-gray-900 sm:text-sm sm:hover:bg-blue-light sm:hover:text-white"
                >
                  {navLink.name}
                </NavLink>
              ))}
        </div>
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
                <span className="text-white text-xs sm:text-green">On</span>
                <span className="text-white text-xs sm:text-green">Off</span>
              </div>
              <div
                className={`bg-white rounded-full h-8 w-8 sm:bg-green ${
                  user.isAvailable ? "float-right" : "float-left"
                } shadow-md`}
              ></div>
            </div>
          </div>
        ) : null}
        <div className="mt-6">
          <button
            className="text-white md:text-gray-900 px-6 py-2 text-sm"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Menu);

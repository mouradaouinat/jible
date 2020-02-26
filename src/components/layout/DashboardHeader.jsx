import React, { useState, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/logo-black.svg";
import { ReactComponent as Burger } from "../../assets/burger.svg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { UserContext } from "../../context/userContext";
import Menu from "../Menu";
import Toast from "../Toast";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(UserContext);
  const [isToastOpen, setIsToastOpen] = useState(true);

  function toggle() {
    setIsOpen(!isOpen);
  }

  function toggleToast() {
    setIsToastOpen(!isToastOpen);
  }

  return (
    <div className="w-screen">
      <header className="py-6 px-4 flex items-center justify-between sm:max-w-screen-sm sm:mx-auto md:max-w-screen-md lg:max-w-screen-lg sm:relative sm:py-4">
        <div>
          <Logo className="h-6 w-auto sm:h-8" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:block">{isToastOpen && <Toast />}</div>
            <button
              type="button"
              className="mr-4 px-2 py-1"
              onClick={toggleToast}
            >
              <Bell />
            </button>
          </div>
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
        {isOpen && <Menu toggle={toggle} />}
      </header>
      <div className="md:hidden">{isToastOpen && <Toast />}</div>
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

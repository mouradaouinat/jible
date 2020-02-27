import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const Toast = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-full px-4 md:w-72 relative">
      <div className="border border-gray-100 bg-white mx-auto p-4 md:py-2 md:px-3 rounded md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <p className="md:text-sm">
            {user.role === "driver"
              ? "New Assignment"
              : "Shared Sekhra request"}
          </p>
          <p className="md:hidden">2:30min</p>
        </div>
        <div className="md:flex md:justify-between md:items-center">
          <button className="text-white bg-green w-full py-3 block mt-3 rounded md:mt-0 md:mr-2 md:px-2 md:py-0 md:text-sm">
            Accept
          </button>
          <button className="bg-gray-100 w-full py-3 block rounded mt-2 md:mt-0 md:px-2 md:py-0 md:mr-2 md:text-sm">
            Refuse
          </button>
          <p className="hidden md:block md:text-sm">2:30min</p>
        </div>
      </div>
      <span className="absolute top-0 right-0 h-4 sm:hidden md:block md:mt-3 md:mr-3 -mt-1 mr-20 -z-10 w-4 bg-gray-100 transform rotate-45"></span>
    </div>
  );
};

export default Toast;

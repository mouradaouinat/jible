import React from "react";

const Toast = () => {
  return (
    <div className="w-full px-4 lg:absolute z-50 lg:-mt-14 lg:mr-48 xl:mr-72 lg:w-72 lg:right-0">
      <div className="border border-gray-100 bg-white mx-auto p-4 lg:py-2 lg:px-3 rounded lg:flex lg:items-center lg:justify-between">
        <div className="flex justify-between items-center">
          <p className="lg:text-sm">New Assignment</p>
          <p className="lg:hidden">2:30min</p>
        </div>
        <div className="lg:flex lg:justify-between lg:items-center">
          <button className="text-white bg-green w-full py-3 block mt-3 rounded lg:mt-0 lg:mr-2 lg:px-2 lg:py-0 lg:text-sm">
            Accept
          </button>
          <button className="bg-gray-100 w-full py-3 block rounded mt-2 lg:mt-0 lg:px-2 lg:py-0 lg:mr-2 lg:text-sm">
            Refuse
          </button>
          <p className="hidden lg:block lg:text-sm">2:30min</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;

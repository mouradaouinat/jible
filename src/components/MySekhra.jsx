import React, { useState } from "react";
import { ReactComponent as Shuffle } from "../assets/shuffle.svg";

const MySekhra = () => {
  const [status, setStatus] = useState("recieved");

  return (
    <div className="rounded border border-gray-100 py-6 px-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg text-green">Sekhra #1</h3>
        <div className="px-2 py-1 bg-blue-light rounded text-white flex items-center">
          <Shuffle className="mr-2 h-4 w-4" />
          Shared Sekhra
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <div
          className="text-center w-1/3"
          onClick={() => setStatus("recieved")}
        >
          <h4 className={`${status === "recieved" ? "text-green" : ""}`}>
            Order Recieved
          </h4>
          <p
            className={`text-sm ${
              status === "recieved" ? "text-green" : "text-gray-300"
            }`}
          >
            message/call
          </p>
        </div>
        <div className="text-center w-1/3" onClick={() => setStatus("ongoing")}>
          <h4 className={`${status === "ongoing" ? "text-green" : ""}`}>
            On the way
          </h4>
          <p
            className={`text-sm ${
              status === "ongoing" ? "text-green" : "text-gray-300"
            }`}
          >
            Tracking
          </p>
        </div>
        <div
          className="text-center w-1/3"
          onClick={() => setStatus("delivered")}
        >
          <h4 className={`${status === "delivered" ? "text-green" : ""}`}>
            Delivered
          </h4>
          <p
            className={`text-sm ${
              status === "delivered" ? "text-green" : "text-gray-300"
            }`}
          >
            Rate
          </p>
        </div>
      </div>
      <div className="px-10 sm:px-12 mx-auto mt-6">
        <div className="w-full h-px bg-gray-100 mt-3"></div>
        <div className="flex justify-between -mt-5">
          <div
            className={`rounded-full h-6 w-6 mt-2 ${
              status === "recieved"
                ? "bg-green"
                : "bg-white border border-gray-100"
            }`}
          ></div>
          <div
            className={`rounded-full h-6 w-6 mt-2 ${
              status === "ongoing"
                ? "bg-green"
                : "bg-white border border-gray-100"
            }`}
          ></div>
          <div
            className={`rounded-full h-6 w-6 mt-2 ${
              status === "delivered"
                ? "bg-green"
                : "bg-white border border-gray-100"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MySekhra;

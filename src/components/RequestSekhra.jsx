import React from "react";
import ItemsList from "./ItemsList";
import { ReactComponent as File } from "../assets/file.svg";
import { ReactComponent as Clock } from "../assets/clock.svg";
import { ReactComponent as Calendar } from "../assets/calendar.svg";
import { ReactComponent as Dollar } from "../assets/dollar.svg";

const RequestSekhra = () => {
  return (
    <div className="px-4 w-screen sm:max-w-screen-sm sm:mx-auto md:max-w-screen-md lg:max-w-screen-lg mt-10 ">
      <h1 className="text-4xl">Request a Sekhra</h1>
      <div className="lg:flex justify-between mt-6">
        <div className="lg:ml-10 lg:order-last">
          <h3 className="text-sm text-gray-300">Adrress</h3>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-2 py-4">From</div>
            <input
              type="text"
              className="border border-gray-100 rounded mt-2 py-2 pl-12 w-full"
            />
          </div>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-2 py-4">To</div>
            <input
              type="text"
              className="border border-gray-100 rounded pl-12 py-2 mt-2 w-full"
            />
          </div>
          <div className="w-full h-full mt-3">
            <img
              src="https://www.google.com/maps/d/thumbnail?mid=1l4Clf7zV6PiFP7rAK0ML9Em8vTg&hl=en"
              alt="map"
            />
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <h3 className="text-sm text-gray-300 mt-4 lg:mt-0">
            Describe your Sekhra
          </h3>
          <div className="relative w-full mt-2">
            <div className="absolute left-0 top-0 pt-2 pl-4">
              <File className="w-6 h-6 mr-2" />
            </div>
            <textarea
              className="pl-12 pt-2 w-full border border-gray-100 rounded"
              rows="4"
              placeholder="text here"
            ></textarea>
          </div>
          <ItemsList />
          <h3 className="text-sm text-gray-300 mt-4">Date</h3>
          <div className="mt-3 flex justify-between items-center px-4 py-2 border rounded border-gray-100">
            <div className="flex items-center justify-between">
              <Clock className="h-6 w-6 mr-2" />
              <span className="text-sm">
                Get your Shekhra as soon as possible?
              </span>
            </div>
            <input
              type="checkbox"
              name=""
              className="form-checkbox border-black border-2 w-5 h-5 text-white"
            />
          </div>
          <h3 className="text-sm text-gray-300 mt-4">Schedule</h3>
          <div className="w-full relative">
            <div className="absolute inset-y-0 py-2 pl-4">
              <Calendar className="h-6 w-6 mr-2" />
            </div>
            <input
              type="date"
              name=""
              id=""
              className="border border-gray-100 rounded pl-12 py-2 flex mt-2 w-full"
            />
          </div>

          <h3 className="text-sm text-gray-300 mt-4">Order's Cost</h3>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-4 py-2">
              <Dollar className="h-6 w-6 mr-2" />
            </div>
            <input
              className="border border-gray-100 pl-12 pr-4 py-2 mt-2 flex rounded w-full"
              type="text"
            />
          </div>
          <button className="rounded w-full py-2 bg-green text-white my-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestSekhra;

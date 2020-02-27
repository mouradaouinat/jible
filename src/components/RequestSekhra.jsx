import React from "react";
import { ReactComponent as File } from "../assets/file.svg";
import { ReactComponent as Box } from "../assets/box.svg";
import { ReactComponent as Clock } from "../assets/clock.svg";
import { ReactComponent as Calendar } from "../assets/calendar.svg";
import { ReactComponent as Dollar } from "../assets/dollar.svg";
import { ReactComponent as Minus } from "../assets/minus.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";

const RequestSekhra = () => {
  return (
    <div className="px-4 w-screen sm:max-w-screen-sm sm:mx-auto md:max-w-screen-md lg:max-w-screen-lg mt-10 ">
      <h1 className="text-2xl">Reaquest a sekhra</h1>
      <div className="lg:flex justify-between">
        <div className="lg:ml-10 lg:order-last">
          <h3 className="text-sm text-gray-300">Adrress</h3>
          <div className="border border-gray-100 rounded p-2 mt-2">
            <span className="mr-2">From</span>
            <input type="text" />
          </div>
          <div className="border border-gray-100 rounded p-2 mt-2">
            <span className="mr-2">To</span>
            <input type="text" />
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
          <div className="border border-gray-100 rounded flex p-4 mt-2">
            <File className="w-6 h-6 mr-2" />
            <textarea placeholder="text here" cols="30" rows="3"></textarea>
          </div>
          <h3 className="text-sm text-gray-300 mt-4">Describe your Sekhra</h3>
          <div className="border border-gray-100 rounded flex py-2 px-4 mt-2 flex justify-between items-center">
            <div className="flex">
              <Box className="h-6 w-6 mr-2" />
              <input type="text" />
            </div>
            <button>
              <Plus className="h-6 w-6" />
            </button>
          </div>
          <div className="bg-blue-light rounded text-white px-4 py-2 flex mt-2 justify-between">
            <li>Some stuff</li>
            <button>
              <Minus className="h-6 w-6" />
            </button>
          </div>
          <div className="bg-blue-light rounded text-white px-4 py-2 flex mt-2 justify-between">
            <li>Some other stuff</li>
            <button>
              <Minus className="h-6 w-6" />
            </button>
          </div>
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
              className="form-checkbox border-black border-1 w-5 h-5 text-white"
            />
          </div>
          <h3 className="text-sm text-gray-300 mt-4">Schedule</h3>
          <div className="border border-gray-100 rounded px-4 py-2 flex mt-2">
            <Calendar className="h-6 w-6 mr-2" />
            <input type="date" name="" id="" />
          </div>

          <h3 className="text-sm text-gray-300 mt-4">Order's Cost</h3>
          <div className="border border-gray-100 px-4 py-2 mt-2 flex rounded">
            <Dollar className="h-6 w-6 mr-2" />
            <input type="text" className="w-full" />
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

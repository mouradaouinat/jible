import React from "react";

const Statistics = () => {
  return (
    <div>
      <div className="border border-gray-100 rounded overflow-hidden">
        <a
          href="/#"
          className="inline-block w-1/4 text-center py-2 text-white bg-green"
        >
          D
        </a>
        <a
          href="/#"
          className="inline-block w-1/4 text-center py-2 border-l border-r border-gray-100"
        >
          W
        </a>
        <a
          href="/#"
          className="inline-block w-1/4 text-center py-2 border-r border-gray-100"
        >
          M
        </a>
        <a href="/#" className="inline-block w-1/4 text-center py-2">
          Y
        </a>
      </div>
      <h3 className="mt-6 text-4xl uppercase">Total</h3>
      <div className="flex flex-wrap">
        <div className="w-1/2 mt-4">
          <h4 className="text-4xl text-green leading-none">24km</h4>
          <h5 className="text-lg uppercase">Distance</h5>
        </div>
        <div className="w-1/2 mt-4">
          <h4 className="text-4xl text-green leading-none">2h</h4>
          <h5 className="text-lg uppercase">Time</h5>
        </div>
        <div className="w-1/2 mt-4">
          <h4 className="text-4xl text-green leading-none">12</h4>
          <h5 className="text-lg uppercase">Sekhra</h5>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

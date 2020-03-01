import React, { useState } from "react";
import { ReactComponent as Phone } from "../assets/phone.svg";

const DeliverSekhra = () => {
  const [items, setItems] = useState([
    { id: 1, value: "1KG meat", checked: false },
    { id: 2, value: "Two cans of beans", checked: false },
    { id: 3, value: "2KG potatoes", checked: false }
  ]);

  const [waypoints] = useState([
    "605 Emmerich Forest Apt. 776",
    "8674 Jovan Dam",
    "592 Kessler Roads"
  ]);

  function onItemChange(id) {
    setItems(oldItems =>
      oldItems.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  return (
    <div className="px-4 w-screen sm:max-w-screen-sm sm:mx-auto md:max-w-screen-md lg:max-w-screen-lg mt-10">
      <div className="rounded border border-gray-100">
        <h1 className="text-2xl p-4">Shekhra</h1>
        <div className="p-4">
          {waypoints.map((waypoint, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center -mt-2">
                <div className="h-3 w-3 bg-gray-300 mr-4 rounded-full"></div>
                <li className="list-none text-gray-300">{waypoint}</li>
              </div>
              <div className="last:hidden h-12 w-line bg-gray-300 -mt-2 ml-1"></div>
            </React.Fragment>
          ))}
        </div>
        <div className="h-full w-full">
          <img
            src="https://www.google.com/maps/d/thumbnail?mid=1l4Clf7zV6PiFP7rAK0ML9Em8vTg&hl=en"
            alt="map"
            className="w-full object-cover object-center"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-300">02 Mar 2019, 10:30am</p>
          <p className="text-sm text-gray-300">Cost: 100dh- 200dh</p>
        </div>
        <div className="mt-6 p-2">
          <p>I Need you to super market and bring me this thing quickly</p>
          {items.map(item => (
            <div
              className="border border-gray-100 rounded px-4 py-2 flex items-center justify-between mt-4"
              key={item.id}
            >
              <p className={item.checked ? "line-through" : ""}>{item.value}</p>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => onItemChange(item.id)}
                className="form-checkbox text-white w-5 h-5 border-black border-2"
              />
            </div>
          ))}
          <div className="rounded border border-gray-80 bg-gray-50 px-6 py-4 flex justify-between items-center mt-6">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
                alt="customer"
                className="rounded-full h-12 w-12 mr-4 object-center object-cover"
              />
              <div>
                <p>John Smith</p>
                <p className="text-gray-300">+21290092625</p>
              </div>
            </div>
            <Phone className="h-6 w-6" />
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <p className="text-2xl">Price</p>
              <p className="text-xl text-green">120DH</p>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <p>Time and Distance</p>
              <p className="text-gray-300">25min / 5km</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-green text-white py-4 w-full rounded">
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverSekhra;

import React, { useContext, useState } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import Modal from "./Modal";
import Map from "./Map";
import { UserContext } from "../context/userContext";
import { v4 as uuid } from "uuid";
import { ReactComponent as Trash } from "../assets/trash.svg";
import { ReactComponent as Pin } from "../assets/pin.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";

const Adresses = () => {
  const { user, setUser } = useContext(UserContext);
  const [address, setAdress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [addressId, setAddressId] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [position, setPosition] = useState([]);
  const provider = new OpenStreetMapProvider();

  function toggle() {
    setIsOpen(!isOpen);
  }

  function confirmDelete(id) {
    setAddressId(id);
    toggle();
  }

  function addAdress() {
    if (address === "") {
      return;
    }
    setUser(oldUser => {
      return {
        ...oldUser,
        addresses: [{ id: uuid(), address, position }, ...oldUser.addresses]
      };
    });
    setAdress("");
    setPosition([]);
  }

  function addAddressOnEnter(e) {
    if (e.keyCode === 13) {
      addAdress();
    }
  }

  function deleteAddress(id) {
    setUser(oldUser => {
      return {
        ...oldUser,
        addresses: oldUser.addresses.filter(address => address.id !== id)
      };
    });
    toggle();
  }

  async function search(input) {
    setAdress(input);
    const results = await provider.search({ query: input });
    setSuggestions(results);
  }

  return (
    <div>
      <h3>Add Address</h3>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pt-3 pl-2">
          <Pin className="w-5 h-5" />
        </div>
        <input
          type="text"
          className="rounded border border-gray-100 px-10 w-full py-2"
          value={address}
          onChange={e => search(e.target.value)}
          onKeyDown={addAddressOnEnter}
        />
        <button className="absolute inset-y-0 right-0 px-2" onClick={addAdress}>
          <Plus className="w-5 h-5" />
        </button>
        <div className="absolute top-0 left-0 mt-12 bg-white rounded border border-gray-100 overflow-hidden shadow z-1000">
          {suggestions &&
            suggestions.map((s, idx) => (
              <li
                key={idx}
                className="text-xs list-none p-2 border-b border-gray-100 cursor-pointer hover:bg-blue-light hover:text-white z-1000"
                onClick={() => {
                  setAdress(s.label);
                  setSuggestions([]);
                  setPosition([parseFloat(s.y), parseFloat(s.x)]);
                }}
              >
                {s.label}
              </li>
            ))}
        </div>
      </div>
      {user.addresses.length === 0 ? (
        <div className="mt-4">
          <p className="text-gray-300">You have no saved Addresses yet.</p>
        </div>
      ) : (
        user.addresses.map((address, idx) => (
          <div className="mt-4" key={address.id}>
            <h3 className="text-lg text-gray-300">Address #{idx + 1}</h3>
            <div className="rounded border border-gray-100 p-2 flex justify-between items-center mt-2">
              <div className="flex items-center">
                <Pin className="w-5 h-5 mr-2" />
                <p className="text-gray-300 text-xs lg:text-sm">
                  {address.address.substr(0, 50).concat("...")}
                </p>
              </div>
              <button onClick={() => confirmDelete(address.id)}>
                <Trash className="w-5 h-5 fill-current hover:text-red" />
              </button>
            </div>
            <div className="rounded overflow-hidden mt-2">
              <Map position={address.position} address={address.address} />
            </div>
          </div>
        ))
      )}
      {isOpen && (
        <Modal toggle={toggle}>
          <p>Are you sure you want to delete this address?</p>
          <div className="mt-4 text-right">
            <button
              className="text-white bg-red px-4 py-2 rounded mr-2"
              onClick={() => deleteAddress(addressId)}
            >
              Delete
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded" onClick={toggle}>
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Adresses;

import React, { useContext, useState } from "react";
import Modal from "./Modal";
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
        addresses: [{ id: uuid(), address }, ...oldUser.addresses]
      };
    });
    setAdress("");
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

  return (
    <div>
      <h3>Add Address</h3>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pt-3 pl-2">
          <Pin className="w-5 h-5" />
        </div>
        <input
          type="text"
          className="rounded border border-gray-100 pl-10 w-full py-2"
          value={address}
          onChange={e => setAdress(e.target.value)}
          onKeyDown={addAddressOnEnter}
        />
        <button className="absolute inset-y-0 right-0 px-2" onClick={addAdress}>
          <Plus className="w-5 h-5" />
        </button>
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
                  {address.address}
                </p>
              </div>
              <button onClick={() => confirmDelete(address.id)}>
                <Trash className="w-5 h-5 fill-current hover:text-red" />
              </button>
            </div>
            <div className="rounded overflow-hidden mt-2">
              <img
                src="https://www.google.com/maps/d/thumbnail?mid=1l4Clf7zV6PiFP7rAK0ML9Em8vTg&hl=en"
                alt="map"
                className="w-full h-24 object-cover object-center"
              />
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

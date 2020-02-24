import React from "react";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";

const Profile = () => {
  return (
    <div className="px-4">
      <form className="mt-10">
        <div>
          <label htmlFor="name" className="text-gray-300">
            Full Name
          </label>
          <div className="border rounded flex items-center p-2">
            <User className="h-6 w-6 mr-3" />
            <input
              id="name"
              type="text"
              value="Tania Smith"
              className="text-lg"
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="email" className="text-gray-300">
            Email
          </label>
          <div className="border rounded flex items-center p-2">
            <Mail className="h-6 w-6 mr-3" />
            <input
              id="email"
              type="text"
              value="Tania@gmail.com"
              className="text-lg"
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="phone" className="text-gray-300">
            Phone
          </label>
          <div className="border rounded flex items-center p-2">
            <Phone className="h-6 w-6 mr-3" />
            <input
              id="phone"
              type="text"
              value="+212690092625"
              className="text-lg"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-6 py-3 text-white bg-blue-light w-full rounded mt-6"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;

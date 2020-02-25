import React, { useState, useContext, useEffect } from "react";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";
import { UserContext } from "../context/userContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
  }, [user.name, user.phone, user.email]);

  function changeName(e) {
    setName(e.target.value);
  }

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changePhone(e) {
    setPhone(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setUser(previousValue => {
      return { ...previousValue, name, phone, email };
    });
  }

  return (
    <>
      <div className="mb-8 flex items-center">
        <img
          src={user.img}
          alt={user.name}
          className="rounded-full h-12 w-12 object-center object-cover mr-2"
        />
        <div>
          <p className="text-gray-900">{user.name}</p>
          <p className="text-gray-300">{user.phone}</p>
        </div>
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-gray-300">
            Full Name
          </label>
          <div className="border border-gray-100 rounded flex items-center p-2">
            <User className="h-6 w-6 mr-3" />
            <input
              id="name"
              type="text"
              value={name}
              onChange={changeName}
              className="text-lg"
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="email" className="text-gray-300">
            Email
          </label>
          <div className="border border-gray-100 rounded flex items-center p-2">
            <Mail className="h-6 w-6 mr-3" />
            <input
              id="email"
              type="text"
              value={email}
              onChange={changeEmail}
              className="text-lg"
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="phone" className="text-gray-300">
            Phone
          </label>
          <div className="border border-gray-100 rounded flex items-center p-2">
            <Phone className="h-6 w-6 mr-3" />
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={changePhone}
              className="text-lg"
            />
          </div>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-3 text-white bg-blue-light w-full rounded mt-6 lg:w-auto lg:px-16 lg:py-2"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default Profile;

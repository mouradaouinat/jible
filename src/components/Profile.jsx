import React, { useContext } from "react";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";
import { UserContext } from "../context/userContext";
import { useForm } from "../hooks";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [values, handleChange] = useForm({
    name: user.name,
    email: user.email,
    phone: user.phone
  });

  function handleSubmit(e) {
    e.preventDefault();

    setUser(previousValue => {
      return {
        ...previousValue,
        name: values.name,
        phone: values.phone,
        email: values.email
      };
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
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-2 pt-2">
              <User className="h-6 w-6 mr-3" />
            </div>
            <input
              name="name"
              id="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              className="text-lg border border-gray-100 rounded flex items-center pl-10 p-2 w-full"
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="email" className="text-gray-300">
            Email
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-2 pt-3">
              <Mail className="h-6 w-6 mr-3" />
            </div>
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="text-lg border border-gray-100 rounded flex items-center pl-10 p-2 w-full"
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="phone" className="text-gray-300">
            Phone
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-2 pt-2">
              <Phone className="h-6 w-6 mr-3" />
            </div>
            <input
              type="text"
              id="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              className="text-lg border border-gray-100 rounded flex items-center pl-10 p-2 w-full"
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

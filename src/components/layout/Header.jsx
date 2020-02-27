import React, { useState, useContext } from "react";
import hero from "../../assets/jibleecover.png";
import { ReactComponent as Logo } from "../../assets/logo-white.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { withRouter } from "react-router-dom";
import Modal from "../Modal";
import { UserContext } from "../../context/userContext";

const Header = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const { setUser } = useContext(UserContext);

  const login = user => {
    setUser(user);
    history.push("/dashboard/home/");
  };

  function toggle() {
    setIsOpen(!isOpen);
  }

  function openModal(type) {
    setModalType(type);
    toggle();
  }

  return (
    <header
      style={{
        backgroundImage: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.42) 100%), url(${hero})`
      }}
      className="w-screen h-screen bg-cover bg-center bg-no-repeat p-6 sm:w-full"
    >
      <div className="flex flex-col justify-between h-full max-w-5xl mx-auto">
        <div className="flex justify-between align-middle">
          <div>
            <Logo />
          </div>
          <div>
            <button
              type="button"
              className="py-1 px-6 bg-green rounded mr-2 text-white"
              onClick={() => openModal("signUp")}
            >
              Get Started
            </button>
            <button
              type="button"
              className="py-1 px-4 bg-white rounded hidden sm:inline-block"
              onClick={() => openModal("login")}
            >
              Login
            </button>
          </div>
        </div>
        <div className="sm:mb-20">
          <h1 className="text-white text-xl text-center">
            An on demand service that picks-up anything you requested through
            the app and
            <br className="hidden sm:inline" /> delivers it to your door within
            one hour.{" "}
          </h1>
          <div className="my-6 max-w-md mx-auto text-center">
            <button
              type="button"
              className="bg-green text-white px-4 py-3 rounded w-64 text-center"
              onClick={() => openModal("signUp")}
            >
              Get Started
            </button>
            <p className="text-white mt-6 text-sm">
              Already have an account?{" "}
              <button
                className="text-green ml-1"
                onClick={() => openModal("login")}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal toggle={toggle}>
          <h1 className="text-4xl">
            {modalType === "login" ? "Login" : "Sign Up"}
          </h1>
          <p className="text-gray-300 text-lg">
            Welcome {modalType === "login" ? "back" : ""} to Jible Services
          </p>

          <button
            onClick={() =>
              login({
                id: 1,
                role: "driver",
                name: "Tania Smith",
                email: "tania@gmail.com",
                phone: "+212690092625",
                img:
                  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
                isAvailable: true
              })
            }
            className="bg-blue-dark rounded text-white px-4 py-2 mt-4 w-full flex items-center"
          >
            <Facebook className="fill-current w-8 h-8 mr-2" />
            {modalType === "login" ? "Login" : "Sign up"} as Driver
          </button>
          <button
            onClick={() =>
              login({
                id: 1,
                role: "customer",
                name: "John Smith",
                email: "John@gmail.com",
                phone: "+212631803625",
                img:
                  "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
              })
            }
            className="bg-blue-dark rounded text-white px-4 py-2 mt-4 w-full flex items-center"
          >
            <Facebook className="fill-current w-8 h-8 mr-2" />
            {modalType === "login" ? "Login" : "Sign up"} as Customer
          </button>
          <p className="mt-4">
            {modalType === "login" ? "Don't have" : "Already have"} an account?{" "}
            <button
              className="text-blue-light"
              onClick={() =>
                setModalType(modalType === "login" ? "signUp" : "login")
              }
            >
              {modalType === "login" ? "Sign up" : "Login"}
            </button>
          </p>
        </Modal>
      )}
    </header>
  );
};

export default withRouter(Header);

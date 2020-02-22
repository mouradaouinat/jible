import React, { useState } from "react";
import hero from "../../assets/jibleecover.png";
import { ReactComponent as Logo } from "../../assets/logo-white.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Helmet } from "../../assets/helmet.svg";
import { ReactComponent as WhiteArrow } from "../../assets/arrow-white.svg";
import { ReactComponent as BlackArrow } from "../../assets/arrow-black.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { Link } from "react-router-dom";
import Modal from "../Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

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
              className="py-1 px-4 bg-white rounded"
              onClick={() => openModal("login")}
            >
              Login
            </button>
          </div>
        </div>
        <div className="sm:mb-20">
          <p className="text-white text-lg text-center">
            An on demand service that picks-up anything you requested through
            the app and
            <br className="hidden sm:inline" /> delivers it to your door within
            one hour.{" "}
          </p>
          <div className="my-6 sm:flex  max-w-md mx-auto">
            <button
              type="button"
              className="bg-green text-white px-4 py-3 w-full justify-between flex items-center rounded sm:w-64 mr-4"
              onClick={() => openModal("customer")}
            >
              <Home /> Sign up as Customer <WhiteArrow />
            </button>
            <button
              type="button"
              className="mt-4 sm:mt-0 bg-white px-4 py-3 w-full justify-between flex items-center rounded sm:w-64"
              onClick={() => openModal("driver")}
            >
              <Helmet /> Sign up as Driver <BlackArrow />
            </button>
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
          {modalType === "login" ? (
            <>
              <Link
                to="/dashboard"
                className="bg-blue-dark rounded text-white px-4 py-2 mt-4 w-full flex items-center"
              >
                <Facebook className="fill-current w-8 h-8 mr-2" />
                Login as Driver
              </Link>
              <Link
                to="/dashboard"
                className="bg-blue-dark rounded text-white px-4 py-2 mt-4 w-full flex items-center"
              >
                <Facebook className="fill-current w-8 h-8 mr-2" />
                Login as Customer
              </Link>
            </>
          ) : (
            <button
              type="button"
              className="bg-blue-dark rounded text-white px-4 py-2 mt-4 w-full flex items-center"
            >
              <Facebook className="fill-current w-8 h-8 mr-2" />
              Sign up as {modalType === "customer" ? "Customer" : "Driver"}
            </button>
          )}
        </Modal>
      )}
    </header>
  );
};

export default Header;

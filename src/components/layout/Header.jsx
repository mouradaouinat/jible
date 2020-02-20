import React from "react";
import hero from "../../assets/jibleecover.png";
import { ReactComponent as Logo } from "../../assets/logo-white.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Helmet } from "../../assets/helmet.svg";
import { ReactComponent as WhiteArrow } from "../../assets/arrow-white.svg";
import { ReactComponent as BlackArrow } from "../../assets/arrow-black.svg";

const Header = () => {
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
            <button type="button" className="py-1 px-4 bg-white rounded">
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
            >
              <Home /> Sign up as Customer <WhiteArrow />
            </button>
            <button
              type="button"
              className="mt-4 sm:mt-0 bg-white px-4 py-3 w-full justify-between flex items-center rounded sm:w-64"
            >
              <Helmet /> Sign up as Driver <BlackArrow />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

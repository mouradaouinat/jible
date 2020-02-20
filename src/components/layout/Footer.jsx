import React from "react";
import { ReactComponent as Logo } from "../../assets/logo-black.svg";

const Footer = () => {
  return (
    <footer className="py-10 px-10">
      <div className="flex flex-col justify-between items-center mb-6 sm:flex-row-reverse sm:items-center sm:max-w-5xl sm:mx-auto">
        <div className="flex items-center flex-col sm:flex-row sm:justify-between sm:mt-12">
          <a href="/#" className="text-xl sm:mr-10">
            About
          </a>
          <a href="/#" className="text-xl mt-4 sm:mt-0 sm:mr-10">
            Terms
          </a>
          <a href="/#" className="text-xl mt-4 sm:mt-0">
            Privacy Policy
          </a>
        </div>
        <div className="mt-8">
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

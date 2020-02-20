import React from "react";
import Header from "../layout/Header";
import { ReactComponent as GooglePlay } from "../../assets/google-play.svg";
import { ReactComponent as AppleStore } from "../../assets/apple-store.svg";
import { ReactComponent as Logo } from "../../assets/logo-black.svg";
import mock from "../../assets/mock.png";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <section className="text-center py-20 sm:max-w-xl sm:mx-auto sm:py-10">
        <h1 className="text-4xl">How it works</h1>
        <div className="sm:text-left">
          <h2 className="text-2xl mt-10">Request your sekhra</h2>
          <p>You can request anything you want.</p>
        </div>
        <div className="sm:text-right">
          <h2 className="text-2xl mt-10">Easy ordering</h2>
          <p>Easy to use and intuitive UI</p>
          <h2 className="text-2xl mt-10">Real time tracking</h2>
          <p>
            Track your order in Real time using the
            <br /> built in map
          </p>
        </div>
      </section>
      <section className="bg-green pt-10 text-center sm:text-left sm:h-56">
        <div className="sm:relative max-w-2xl mx-auto sm:h-full">
          <div className="sm:absolute sm:right-0 sm:mr-2">
            <h2 className="text-white text-2xl sm:text-xl">
              Track your deliveries
              <br /> with the Jible App
            </h2>
            <div className="flex flex-col justify-between items-center mt-8 sm:flex-row">
              <button type="button" className="inline-block sm:mr-2">
                <GooglePlay className="w-32" />
              </button>
              <button type="button" className="mt-4 sm:mt-0 inline-block">
                <AppleStore className="w-32" />
              </button>
            </div>
          </div>
          <img
            src={mock}
            alt="App mock"
            className="mt-10 sm:absolute sm:inset-0 sm:-mt-57 mx-auto sm:m-0"
          />
        </div>
      </section>
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
    </div>
  );
};

export default LandingPage;

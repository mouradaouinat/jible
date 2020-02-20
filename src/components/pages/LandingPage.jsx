import React from "react";
import Header from "../layout/Header";
import { ReactComponent as GooglePlay } from "../../assets/google-play.svg";
import { ReactComponent as AppleStore } from "../../assets/apple-store.svg";
import mock from "../../assets/mock.png";
import Footer from "../layout/Footer";

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
      <Footer />
    </div>
  );
};

export default LandingPage;

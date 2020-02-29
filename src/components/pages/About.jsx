import React from "react";
import { ReactComponent as ReactLogo } from "../../assets/react.svg";
import { ReactComponent as TailwindLogo } from "../../assets/tailwind.svg";
import { ReactComponent as ChevronLeft } from "../../assets/chevron-left.svg";
import { useHistory } from "react-router-dom";

const About = () => {
  const { goBack } = useHistory();
  return (
    <div className="p-4 mx-auto w-screen sm:max-w-screen-sm sm:mx-auto md:max-w-screen-md lg:max-w-screen-lg mt-10">
      <button onClick={goBack} className="text-blue-light">
        <ChevronLeft className="h-5 w-5 inline mr-2" />
        Back
      </button>
      <h1 className="text-5xl">About</h1>
      <h3 className="text-xl">Jible v0.1.0</h3>
      <p className="mt-4">Designed by the good folks at Gemography</p>
      <p>
        Frontend made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/mourad-aouinat-981912133/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-light hover:underline"
        >
          Mourad Aouinat
        </a>
      </p>
      <h3 className="text-xl mt-4">Technologies Used:</h3>
      <p className="text-xl">
        <ReactLogo className="h-5 w-5 inline mr-2" />
        ReactJs
      </p>
      <p className="text-xl">
        <TailwindLogo className="h-5 w-5 mr-2 inline" />
        Tailwind CSS
      </p>
    </div>
  );
};

export default About;

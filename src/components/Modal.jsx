import React, { useEffect } from "react";

const Modal = ({ toggle, children }) => {
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode !== 27) {
        return;
      }
      toggle();
    }
    document.addEventListener("keydown", e => onEsc(e));

    return document.removeEventListener("keydown", e => onEsc(e));
  });

  return (
    <div className="fixed inset-0 z-1000 px-5 flex flex-col justify-center items-center">
      <div className="rounded bg-white mx-auto relative px-10 z-1000">
        <button
          onClick={toggle}
          type="button"
          className="absolute right-0 text-white bg-gray-900 h-8 w-8 rounded-full -mt-3 -mr-3 flex flex-col items-center justify-center"
        >
          &#x2715;
        </button>
        <div className="py-10 sm:px-20">{children}</div>
      </div>
      <button
        className="fixed inset-0 w-screen h-screen bg-gray-transparent z-30 cursor-default focus:outline-none"
        onClick={toggle}
      ></button>
    </div>
  );
};

export default Modal;

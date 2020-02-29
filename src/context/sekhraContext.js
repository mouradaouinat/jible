import React, { createContext, useState } from "react";

export const SekhraContext = createContext();

export const SekhraProvider = ({ children }) => {
  const [sekhra, setSekhra] = useState({
    from: "",
    to: "",
    description: "",
    items: [],
    asap: false,
    schedule: "",
    cost: ""
  });

  const [sekhratList, setSekhratList] = useState([]);

  return (
    <SekhraContext.Provider
      value={{ sekhra, setSekhra, sekhratList, setSekhratList }}
    >
      {children}
    </SekhraContext.Provider>
  );
};

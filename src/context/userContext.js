import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    role: "driver",
    name: "Tania Smith",
    email: "tania@gmail.com",
    phone: "+212690092625",
    img:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
    isAvailable: true
  });

  const [navLinks] = useState({
    driver: [
      { name: "Sekhrat TODO", path: "/sekhrat-todo" },
      { name: "My Profile", path: "/profile" },
      { name: "My Statistics", path: "/statistics" }
    ],
    customer: [
      { name: "My Sekhra", path: "/my-sekhra" },
      { name: "My Profile", path: "/profile" },
      { name: "My Adresses", path: "/adresses" }
    ]
  });

  return (
    <UserContext.Provider value={{ user, setUser, navLinks }}>
      {children}
    </UserContext.Provider>
  );
};

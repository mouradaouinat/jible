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
      { name: "Sekhrat TODO", path: "/dashboard/home/settings/sekhrat-todo" },
      { name: "My Profile", path: "/dashboard/home/settings/profile" },
      { name: "My Statistics", path: "/dashboard/home/settings/statistics" }
    ],
    customer: [
      { name: "My Sekhra", path: "/dashboard/home/settings/my-sekhra" },
      { name: "My Profile", path: "/dashboard/home/settings/profile" },
      { name: "My Adresses", path: "/dashboard/home/settings/adresses" }
    ]
  });

  return (
    <UserContext.Provider value={{ user, setUser, navLinks }}>
      {children}
    </UserContext.Provider>
  );
};

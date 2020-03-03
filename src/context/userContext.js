import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    role: "customer",
    name: "John Smith",
    email: "John@gmail.com",
    phone: "+212631803625",
    img:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
    addresses: []
  });

  const [navLinks] = useState({
    driver: [
      { name: "Sekhrat TODO", path: "/dashboard/settings/sekhrat-todo" },
      { name: "My Profile", path: "/dashboard/settings/profile" },
      { name: "My Statistics", path: "/dashboard/settings/statistics" }
    ],
    customer: [
      { name: "My Sekhra", path: "/dashboard/settings/my-sekhra" },
      { name: "My Profile", path: "/dashboard/settings/profile" },
      { name: "My Adresses", path: "/dashboard/settings/addresses" }
    ]
  });

  return (
    <UserContext.Provider value={{ user, setUser, navLinks }}>
      {children}
    </UserContext.Provider>
  );
};

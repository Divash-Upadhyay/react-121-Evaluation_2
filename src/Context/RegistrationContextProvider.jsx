import React, { useReducer, useState } from "react";

export const registrationContext = React.createContext();

export const RegistrationContextProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    isAuth: false,
  });
  return (
    <registrationContext.Provider value={[data, setData]}>
      {children}
    </registrationContext.Provider>
  );
};

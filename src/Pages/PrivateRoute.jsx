import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { registrationContext } from "../Context/RegistrationContextProvider";

export const PrivateRoute = ({ children }) => {
  const [data] = useContext(registrationContext);

  //   console.log(
  //     data.isAuth &&
  //       data.name.length > 7 &&
  //       data.email.length > 8 &&
  //       data.number.length > 10 &&
  //       data.address
  //   );

  if (data.isAuth) {
    return children;
  }
  useEffect(() => {
    alert("Enter All Details");
  });

  return <Navigate to="/register/one" />;
};

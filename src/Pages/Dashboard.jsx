import React, { useContext } from "react";
import { registrationContext } from "../Context/RegistrationContextProvider";

export const Dashboard = () => {
  const [data] = useContext(registrationContext);
  console.log("data", data);
  return (
    <div>
      Dashboard
      <div>
        <div>Name:{data.name}</div>
        <div>Email:{data.email}</div>
        <div>Address:{data.address}</div>
        <div>Number:{data.number}</div>
      </div>
      ;
    </div>
  );
};

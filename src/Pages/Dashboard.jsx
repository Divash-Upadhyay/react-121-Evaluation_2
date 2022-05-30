import React, { useContext } from "react";
import { registrationContext } from "../Context/RegistrationContextProvider";
import "./Dashboard.css";

export const Dashboard = () => {
  const [data] = useContext(registrationContext);
  console.log("data", data);
  return (
    <div>
      Dashboard
      <div className="dash">
        <h1>Name: {data.name}</h1>
        <h3>Email: {data.email}</h3>
        <h3>Address: {data.address}</h3>
        <h4>Number: {data.number}</h4>
      </div>
      ;
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      Home
      <br />
      <br />
      <Link to="/register/one">Register</Link>
    </div>
  );
};

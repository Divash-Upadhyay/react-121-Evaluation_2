import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <br />
      <h1>Regsiter Youself into The Dasboard</h1>
      <br />
      <Link to="/register/one">Register</Link>
    </div>
  );
};

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { PrivateRoute } from "./PrivateRoute";
import { RegisterPageOne } from "./RegisterPageOne";
import { RegisterPageTwo } from "./RegisterPageTwo";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/register/one" element={<RegisterPageOne />} />
        <Route path="/register/two" element={<RegisterPageTwo />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

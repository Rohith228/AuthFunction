import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const ProtectedRoute = () => {
  const cookie = new Cookies();
  const auth = cookie.get("jwt_token");

  return <div>{auth ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default ProtectedRoute;

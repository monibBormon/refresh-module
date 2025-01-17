import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
const PrivateRoute = ({ children }) => {
  let isLogin = Cookies.get("token");
  return !!isLogin === true ? children : <Navigate to='/login' />;
};

export default PrivateRoute;

import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  let isLogin = Cookies.get("token");
  console.log(isLogin);
  return !!isLogin === true ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

import React from "react";
import { useStorage } from "../context/useStorage";
import { Redirect, Route } from "react-router";

const AuthRoute = props => {
  const { isLogin } = useStorage();
  if (isLogin) return <Redirect to="/home" />;
  else if (!isLogin) return <Redirect to="/" />;
  return <Route {...props} />;
};


export default AuthRoute;
import React from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const username = useSelector((state) => state.userReducer.value);
  return <div>{username}</div>;
};

export default Login;

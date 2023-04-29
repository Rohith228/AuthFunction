import React from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const cookie = new Cookies();
  const jwtToken = cookie.get("jwt_token");
  const navigate = useNavigate();

  const setCookiesAndNavigateToHome = (token) => {
    cookie.set("jwt_token", token);
    navigate("/");
  };

  const onLogin = async () => {
    const userDetails = {
      username: "rahul",
      password: "rahul@2021",
    };

    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok === true) {
      setCookiesAndNavigateToHome(data.jwt_token);
    }
  };

  if (jwtToken === undefined) {
    navigate("/login");
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;

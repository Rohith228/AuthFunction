import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Home = () => {
  const cookie = new Cookies();
  const navigate = useNavigate();

  const onClickLogout = () => {
    cookie.remove("jwt_token");
    navigate("/login");
  };

  return (
    <div>
      <div className="routes">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <button onClick={onClickLogout}>Logout</button>
    </div>
  );
};

export default Home;

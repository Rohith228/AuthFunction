import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Login from "./components/login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

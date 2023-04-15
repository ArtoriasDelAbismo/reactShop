import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/global.css";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import RecoverPassword from "../containers/RecoverPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

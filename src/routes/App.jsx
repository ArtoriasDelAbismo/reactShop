import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/global.css";
import Layout from "../containers/Layout";
import CreatePassword from "../containers/CreatePassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import RecoverPassword from "../containers/RecoverPassword";
import Login from "../containers/Login";
import CreateAccount from "../containers/CreateAccount";
import MyAccount from "../containers/MyAccount";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Layout" element={<Layout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/MyAccount" element={<MyAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

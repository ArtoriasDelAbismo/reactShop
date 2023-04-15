import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/global.css";
import Layout from "../containers/Layout";
import CreateAccount from "../containers/CreateAccount";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import RecoverPassword from "../containers/RecoverPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

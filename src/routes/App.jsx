import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@styles/global.css";
import CreatePassword from "@pages/CreatePassword";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import RecoverPassword from "@pages/RecoverPassword";
import Login from "@pages/Login";
import CreateAccount from "@pages/CreateAccount";
import MyAccount from "@pages/MyAccount";
import Checkout from "@pages/Checkout";
import Orders from "@pages/Orders";
import SendEmail from "@pages/SendEmail";
import Layout from "@containers/Layout";
import AppContext from '../context/AppContext'
import useInitialState from "../hooks/useInitialState";
const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value = {initialState}>
      <BrowserRouter>
        <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-password" element={<CreatePassword />} />
            <Route path="/recover-password" element={<RecoverPassword />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/MyAccount" element={<MyAccount />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Send-Email" element={<SendEmail />} />
          </Routes>
      </BrowserRouter>
    </AppContext.Provider>
        
  );
};

export default App;

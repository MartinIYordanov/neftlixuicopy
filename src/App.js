import React from "react";
import Navbar from "./comps/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./comps/Main";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Protectedroute from "./comps/Protectedroute";

export default function App(props) {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/Account"
            element={
              <Protectedroute>
                <Account />
              </Protectedroute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}


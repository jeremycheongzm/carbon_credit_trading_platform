import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RequestsReceived from './pages/RequestsReceived';
import Navbar from "./components/Navbar";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export default function App() {
  return (
    <BrowserRouter>
      {isAuthenticated() && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/requests"
          element={
            isAuthenticated() ? <RequestsReceived /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

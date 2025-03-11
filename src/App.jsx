import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import "./App.css";
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import ProtectedRoute from "./routes/ProtectedRoute";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import AppLayout from "./layouts/App/app.layout";
import DashboardLayout from "./layouts/dashboard/dashboard.layout";
import RequireAuth from "./protectRoute/auth";
import AuthLayout from "./layouts/auth/Auth.layout";
import NoRequireAuth from "./protectRoute/noAuth";


function App() {
  return (
      <main>
          <BrowserRouter>
            <ToastContainer position="top-center" />
            <Routes>
              <Route path="/*" element={<AppLayout />}/>
              <Route path="/auth/*" element={<NoRequireAuth><AuthLayout /></NoRequireAuth>} />
              <Route path="/dashboard/*" element={<RequireAuth admin Page={DashboardLayout} />}/>
            </Routes>
          </BrowserRouter>
      </main>
  )
}

export default App

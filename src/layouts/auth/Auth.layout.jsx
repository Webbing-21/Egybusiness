import { Link, Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "../../pages/auth/login/Login";
import SignUp from "../../pages/auth/signup/signup";
import "../../pages/auth/login/login.css";
import ForgotPassword from "../../pages/auth/forgotPassword/forgotPassword";
import Verifyotp from "../../pages/auth/Verifyotp/Verifyotp";

import Header from "../Header/Header";
import ResetPasswordPage from "../../pages/auth/reset-password/resetPassword";

export default function AuthLayout() {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="login-container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp" element={<Verifyotp />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
        <div className="login-right">
          <h2>Welcome back</h2>
          {location.pathname === "/auth/login" ? (
            <>
              <p>Don't have an account?</p>
              <Link to={"/auth/signup"}>
                <button className="signup-btn">Sign Up</button>
              </Link>
            </>
          ) : (
            <>
              <p>Do have an account?</p>
              <Link to={"/auth/login"}>
                <button className="signup-btn">login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

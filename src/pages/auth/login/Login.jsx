import React, { useContext, useState } from "react";
import "./login.css";
// import googleIcon from "../../../Assets/login/devicongoogle.png";
// import FacebockIcon from "../../../Assets/login/logofacebook.png";
import { UserContext } from "../../../context/auth/usercontect";

import line from "../../../Assets/login/line.png";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { customAxios } from "../../../lib/axios.lib";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

const LoginPage = () => {
  let { setUserToken, setUserData } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  let Navigate = useNavigate();
  async function submitLogin(values) {
    const { data } = await customAxios
      .post("/auth/login", values)
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        setError(error?.response?.data?.message);
      });
    if (data.status === "SUCCESS") {
      localStorage.setItem("token", data.token);
      localStorage.setItem("data", JSON.stringify(data.data.user));
      setUserToken(data.token);
      setUserData(data.user);
      Navigate("/");
      setTimeout(() => {
        window.location.reload();
      }, 0);
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    // .min(8, "Password must be at least 8 characters")
    // .matches(/[a-zA-Z]/, "Password can only contain Latin letters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: submitLogin,
  });

  return (
    <>
      <div className="login-left">
        {error && <div className="alert mt-4 p-3 alert-info">{error}</div>}
        <h2>Log in to your account</h2>
        {/* <p>Welcome back to login page</p>
        <div className="social-login">
          <button className="google-btn">
            {" "}
            <img src={googleIcon} /> <span>Google</span>
          </button>
          <button className="facebook-btn">
            {" "}
            <img src={FacebockIcon} /> <span>Google</span>
          </button>
        </div> */}

        <img src={line} className="or" alt="" />

        {/* <p className="or">Or</p> */}
        <Form className="login-form" onSubmit={formik.handleSubmit}>
          <Row className="mb-3">
            <Form.Label>Email</Form.Label>
            <InputGroup>

              <Form.Control
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                id="email"
                type="email"
                name="email"
                placeholder="Email*"
                required
                className="mb-3"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <Form.Group as={Col} controlId="validationCustomUsername">
              <Form.Label>Passowrd</Form.Label>
              <InputGroup>
                <Form.Control
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"} // إظهار أو إخفاء كلمة المرور
                  placeholder="Password*"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
                <InputGroup.Text
                  onClick={() => setShowPassword(!showPassword)}
                  id="inputGroupPrepend"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Link to={"/auth/forgot-password"}>
              <p className="forgot-password">Forgot your password?</p>
            </Link>
            <button type="submit" className="login-btn">
              Log in
            </button>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;

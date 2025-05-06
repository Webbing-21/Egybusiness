import React, { useState } from "react";
import line from "../../../Assets/login/line.png";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../../lib/axios.lib";
import { toast } from "react-toastify";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPasswordPage = () => {
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  let Navigate = useNavigate();
  async function submitRegister(values) {
      const response = await customAxios.post('/auth/reset-password', values)
      .catch(error => {
        toast.error(error?.response?.data?.message)
      })
      if (response.data.status === "success") {
        toast.success(response.data.message)
        Navigate("/auth/login")
      }
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters'),
      passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Password confirmation is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema,
    onSubmit: submitRegister,
  });

  return (
    <div className="login-left">
      {error && <div className='alert mt-4 p-3 alert-info'>{error}</div>}
      <h2>Reset Password</h2>
      <img src={line} className="or" alt="Line separator" />
      <p className="or">Or</p>
      <Form noValidate className="container login-form" onSubmit={formik.handleSubmit}>
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
            />
          </InputGroup>
          {formik.errors.email && formik.touched.email && (
            <Form.Label>{formik.errors.email}</Form.Label>
          )}
        </Row>
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
          {formik.errors.password && formik.touched.password && (
            <Form.Label>{formik.errors.password}</Form.Label>
          )}
        </Form.Group>
        <Form.Group as={Col} className="mt-2" controlId="validationCustomUsername">
          <Form.Label>Passowrd</Form.Label>
          <InputGroup>
            <Form.Control
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type={showPassword ? "text" : "password"} // إظهار أو إخفاء كلمة المرور
              required
              value={formik.values.passwordConfirm}
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Confirm your password*"
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
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <Form.Label>{formik.errors.passwordConfirm}</Form.Label>
          )}
        </Form.Group>

        <button
          disabled={!(formik.isValid && formik.dirty)}
          type="submit"
          className="login-btn mt-3"
        >
          Reset
        </button>
      </Form>
    </div>
  );
};

export default ResetPasswordPage;

import React, { useState } from "react";
import line from "../../../Assets/login/line.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../../lib/axios.lib";
import { toast } from "react-toastify";
import { Form, InputGroup, Row } from "react-bootstrap";

const Verifyotp = () => {
  const [error, setError] = useState(null);
  let Navigate = useNavigate();
  async function submitotp(values) {
    const { data } = await customAxios.post("/auth/verify-otp", values).catch(error => {
      toast.error(error?.response?.data?.message)
    });
   if (data.message === "success") {
      Navigate("/auth/reset-password")
    }
  }

  const validationSchema = Yup.object({
    otp: Yup.string()
      .required("This field is required")
      .matches(/^[0-9]{3,10}$/, "Enter numbers only"),
  });

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema,
    onSubmit: submitotp,
  });

  return (
    <div className="login-left">
      {error && <div className="alert mt-4 p-3 alert-info">{error}</div>}
      <h2>Verify Your Otp</h2>

      <img src={line} className="or" alt="Line separator" />
      <Form className="login-form" onSubmit={formik.handleSubmit}>
      <Row className="mb-3">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <Form.Control
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.otp}
              id="otp"
              type="number"
              name="otp"
              placeholder="otp*"
            />
          </InputGroup>
          {formik.errors.username && formik.touched.username && (
            <Form.Label>{formik.errors.username}</Form.Label>
          )}
        </Row>
        <button
          disabled={!(formik.isValid && formik.dirty)}
          type="submit"
          className="login-btn"
        >
          Send
        </button>
      </Form>
    </div>
  );
};

export default Verifyotp;

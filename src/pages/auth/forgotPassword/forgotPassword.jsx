import React from "react";
import line from "../../../Assets/login/line.png";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { customAxios } from "../../../lib/axios.lib";
import { toast } from "react-toastify";
import { Form, InputGroup, Row } from "react-bootstrap";

export default function ForgotPassword() {
  // const [error, setError] = useState(null);

  let Navigate = useNavigate();
  async function forgetpassword(values) {
    const { data } = await customAxios
      .post("/auth/forget-password", values)
      .catch((error) => {
        toast.error(error?.response?.data?.message)
        // setError(error.response.data.message)
      });
    console.log(data);
    if (data.status === "success") {
      Navigate("/auth/otp");
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: forgetpassword,
  });

  return (
    <div className="login-left">
      <h2>Forgot password</h2>
      <img src={line} className="or" alt="" />
      <Form className="login-form" onSubmit={formik.handleSubmit}>
      <Row className="mb-3">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.email}
              id="email"
              type="email"
              name="email"
              placeholder="Email*"
              required
            />
          </InputGroup>
          {formik.errors.username && formik.touched.username && (
            <Form.Label>{formik.errors.username}</Form.Label>
          )}
        </Row>
        <button type="submit" className="login-btn">
          Send
        </button>
        <Link to={"/auth/login"}>
          <p className="forgot-password">login ?</p>
        </Link>
      </Form>
    </div>
  );
}

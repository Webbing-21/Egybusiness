import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import DashboardPage from "../../pages/dashboard/dashboard";
import NotFoundPage from "../../pages/NotFound/NotFound";
import HeaderDashboard from "../../Components/dashboard/header/header";
import style from "./dashboard.module.css";
import DashboardProducts from "../../pages/dashboard/products";
import { Offcanvas } from "react-bootstrap";
import HistoryPage from "../../pages/dashboard/history";
import UsersPage from "../../pages/dashboard/users";
import SingleUserPage from "../../pages/dashboard/singleUser";

export default function DashboardLayout() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <HeaderDashboard handleShow={handleShow} />
      <div className="d-flex">
        <Offcanvas
          className={"sidenav-mobile-dashboard"}
          show={show}
          onHide={handleClose}
          responsive="lg"
        >
          <Offcanvas.Body className={style.sidenav}>
            <div className="d-flex d-lg-none justify-content-end">
              <h4 onClick={handleClose} style={{cursor: 'pointer'}}>
                <i className="fa fa-close" aria-hidden="true"></i>
              </h4>
            </div>
            <Link to={"/dashboard"}>
              <i className="fa fa-house" aria-hidden="true"></i>
              Dashboard
            </Link>
            <Link to={"/dashboard/products"}>
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              Products
            </Link>
            <Link to={"/dashboard/users"}>
              <i className="fa fa-users" aria-hidden="true"></i>
              Users
            </Link>
            <Link to={"/dashboard/history"}>
              <i className="fa fa-users" aria-hidden="true"></i>
              History
            </Link>
          </Offcanvas.Body>
        </Offcanvas>
        <div style={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/products" element={<DashboardProducts />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<SingleUserPage/>} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

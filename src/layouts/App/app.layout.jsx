import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../../pages/Home/Home";
import NotFoundPage from "../../pages/NotFound/NotFound";

import BuyerInfo from  "../../pages/buyer/buyerInfo"
import CartPage from  "../../pages/cart/cart"
import Productdetails from "../../pages/ProductDetails/Productdetails"
import FavoritePage from  "../../pages/favorite/favorite"

import Products from "../../pages/products/Products";
import PaymentPage from "../../pages/payment/PaymentPage";
import ConfirmationPage from "../../pages/confirmation/ConfirmationPage";
import RequireAuth from "../../protectRoute/auth";
import CheckoutPendingPage from "../../pages/ckeckoutPending/CheckoutPending";


export default function AppLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/cart" element={<RequireAuth Page={CartPage}/>} />
        <Route path="/favorite" element={<RequireAuth Page={FavoritePage}/>} />
        <Route path="/buyer-info" element={<RequireAuth Page={BuyerInfo}/>} />
        <Route path="/checkout-pending" element={<RequireAuth Page={CheckoutPendingPage}/>} />
        <Route path="/payment" element={<RequireAuth Page={PaymentPage}/>} />
        <Route path="/confirmation" element={<RequireAuth Page={ConfirmationPage}/>} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

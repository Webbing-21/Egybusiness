import React from "react";
import image from "../../Assets/cart/image.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function CartEmpty() {
  return (
    <main className="cart_empty text-center">
      <section className="d-flex justify-content-center align-items-center">
        <img style={{ width: "250px" }} src={image} alt="" srcSet="" />
      </section>
      <section className="d-flex justify-content-center flex-column align-items-center gap-4">
        <h1>Your shopping cart is empty.</h1>
        <Link to={'/explore'}>
            <Button variant="light" size="lg" className="primary-bg ">
            Explore
            </Button>
        </Link>
      </section>
    </main>
  );
}

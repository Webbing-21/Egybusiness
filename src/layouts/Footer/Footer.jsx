import React from "react";
// import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="social">
          <h1 className="logo">egybusiness.ae</h1>
          <p >
            Lorem ipsum dolor sit amet consectetur. Feugiat purus ipsum massa
            scelerisque. Tellus ac sit fermentum malesuada tortor commodo
            imperdiet sem. Adipiscing pellentesque non aliquam sodales gravida
            suspendisse.
          </p>

          <div className="icons">
            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaLinkedinIn />
            </div>
            <div className="icon">
              <FaWhatsapp />
            </div>
          </div>
        </div>
        <div className="support">
          <h1>Get support</h1>
          <ul>
            <li>Help Center</li>
            <li>Live chat</li>
            <li>Check the order status</li>
            <li>Refunds</li>
            <li>Report abuse</li>
          </ul>
        </div>
        <div className="us">
          <h1>Trade Assurance</h1>
          <ul>
            <li>Safe and easy payments</li>
            <li>Refund Policy</li>
            <li>Shipping on time</li>
            <li>After-sales protection means</li>
            <li>Product monitoring services</li>
          </ul>
        </div>
        <div className="us">
          <h1>get to know us</h1>
          <ul>
            <li>About Alibaba.com</li>
            <li>Corporate responsibility</li>
            <li>Check the order status</li>
            <li>News Center</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
    
    </div>
  );
};

export default Footer;
           

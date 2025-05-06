import React, { useState } from "react";
import { Button, Image, Offcanvas, Table } from "react-bootstrap";
import { formatISODate } from "../../../lib/formatDate";
import { Link } from "react-router-dom";
import { baseURL } from "../../../lib/axios.lib";
import "./products-offcanvas.css";

export default function CheckoutProductsOffcanvas({ checkout }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <td className="products-offcanvas">
      <Button variant="primary" size="lg" onClick={handleShow}>
        View
      </Button>
      <Offcanvas
        show={show}
        scroll={true}
        className={"products-offcanvas"}
        onHide={handleClose}
        placement="bottom"
      >
        <Offcanvas.Header closeButton style={{ marginBottom: "-60px" }}>
          <Offcanvas.Title>Products of checkout</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4 style={{margin: '-4px 0px', fontWeight: 'bold'}}>Adress</h4>
          <div className="d-flex">
            <Table responsive striped bordered hover className="mt-3" style={{width: '47vw'}}>
              <tbody>
                <tr>
                  <td>Status</td>
                  <td> {checkout?.status} </td>
                </tr>
                <tr>
                  <td>Created At</td>
                  <td>{formatISODate(checkout?.createdAt)}</td>
                </tr>

                <tr>
                  <td>First name</td>
                  <td>{checkout?.firstName}</td>
                </tr>

                <tr>
                  <td>Last name</td>
                  <td>{checkout?.lastName}</td>
                </tr>

                <tr>
                  <td>Email Address</td>
                  <td>{checkout?.emailAddress}</td>
                </tr>

                <tr>
                  <td>Phone</td>
                  <td>{checkout?.phone}</td>
                </tr>
              </tbody>
            </Table>
            <Table responsive striped bordered hover className="mt-3" style={{width: '47vw'}}>
              <tbody>
                
                <tr>
                  <td>Address</td>
                  <td>{checkout?.address}</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>{checkout?.state}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{checkout?.city}</td>
                </tr>
                <tr>
                  <td>Post code</td>
                  <td>{checkout?.postCode}</td>
                </tr>
                <tr>
                  <td>Note</td>
                  <td>{checkout?.note || ''}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <Table responsive striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Price At Purchase</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {checkout?.products?.map((product) => {
                return (
                  product && (
                    <tr key={product._id}>
                      <td>
                        <Link
                          to={`/product/${product?._id}`}
                          className="primary-color"
                        >
                          {product?.product != null && (
                            <Image
                              src={baseURL + product?.product.image[0]?.url}
                              width={"40px"}
                              height={"40px"}
                            />
                          )}
                          <span className="ms-2">
                            {product.product != null
                              ? product.product.name
                              : ""}
                          </span>
                        </Link>
                      </td>
                      <td>{product.product?.currentPrice}</td>
                      <td>{product?.priceAtPurchase}</td>
                      <td>{product?.quantity}</td>
                    </tr>
                  )
                );
              })}
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </td>
  );
}

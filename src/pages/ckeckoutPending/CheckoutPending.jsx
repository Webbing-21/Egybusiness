import React, { useEffect, useState } from "react";
import { getCheckoutPinding } from "../../apis/products/checkouts";
import { Button, Table } from "react-bootstrap";
import { formatISODate } from "../../lib/formatDate";
import { Link } from "react-router-dom";
import PaginationComponent from "../../Components/pagination/PaginationComponent";

export default function CheckoutPendingPage() {
  const [checkouts, getCheckouts] = useState(null);

const [currentPage, setCurrentPage] = useState(1); 
const [totalProducts, setTotalProducts] = useState(0); 


  useEffect(() => {
    getCheckoutPinding(`?pageNumber=${currentPage}&CHECKOUTS_PER_PAGE=${10}`).then((res) => {
      getCheckouts(res.checkouts);
      setTotalProducts(res.totalCheckoutsCount)
    });
  }, [currentPage]);

  return (
    <div className="container py-4">
      <h5 className="bold">Checkout Pending</h5>
      <Table responsive striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Address info..</th>
            <th>Total Amount</th>
            <th>Created At</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>
          {checkouts ? checkouts?.map((checkout) => {
            return (
              <tr key={checkout._id}>
                <td>
                  <span>{checkout?.state}</span>
                  <span> - {checkout?.city}</span>
                  <span> - {checkout?.address}</span>
                  <span> - {checkout?.phone}</span>
                </td>
                <td>{checkout.totalAmount}</td>
                <td>{formatISODate(checkout.createdAt)}</td>
                <td><Link to={`/payment?id=${checkout._id}`}><Button >Buy</Button></Link></td>
              </tr>
            )
          }) : <tr><td className="bold py-4">Not found checkouts pending</td></tr>}
        </tbody>
      </Table>
      <PaginationComponent
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
          productsPerPage={10}
        />
    </div>
  );
}

import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import CheckoutProductsOffcanvas from '../../Components/dashboard/checkout/CheckoutProductsOffcanvas';
import { getAllCheckouts } from '../../apis/products/checkouts';
import { formatISODate } from '../../lib/formatDate';
import PaginationComponent from '../../Components/pagination/PaginationComponent';

export default function HistoryPage() {

let [checkouts, setChechouts] = useState([])

const [currentPage, setCurrentPage] = useState(1); 
const [totalProducts, setTotalProducts] = useState(0); 

  useEffect(() => {
    getAllCheckouts(`?pageNumber=${currentPage}&CHECKOUTS_PER_PAGE=${10}`).then(res => {
      setChechouts(res?.checkouts)
      setTotalProducts(res.totalCheckoutsCount)
    })
  }, [currentPage])


  
  return (
    <div>
      <div className='bold'>
        History
      </div>
      <Table responsive striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>user</th>
            <th>Products count</th>
            <th>Total</th>
            <th>Time</th>
            <th>products</th>
            {/* <th>Control</th> */}
          </tr>
        </thead>
        <tbody>
          { checkouts?.map((checkout) => {
            return (
              <tr key={checkout._id}>
                <td>
                  {checkout?.user?.username}
                </td>
                <td>
                  {checkout.products.length}
                </td>
                <td>${checkout.totalAmount}</td>
                <td>{formatISODate(checkout.createdAt)}</td>
                <CheckoutProductsOffcanvas checkout={checkout}/>
                {/* <td className="d-flex gap-2">
                  <Button variant="danger">Delete</Button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <PaginationComponent
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
          productsPerPage={10}
        />
      </div>
    </div>
  )
}

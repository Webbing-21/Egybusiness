import React, { useEffect, useState } from "react";
import AddProducts from "../../Components/dashboard/products/addProducts";
import { Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../../apis/products/product";
import { formatISODate } from "../../lib/formatDate";
import { baseURL } from "../../lib/axios.lib";
import UpdateImageProduct from "../../Components/dashboard/products/UpdateImageProduct";
import PaginationComponent from "../../Components/pagination/PaginationComponent";
import DeleteProductButton from "../../Components/dashboard/products/DeleteProductButton";

export default function DashboardProducts() {
  const [refresh, setRefresh] = useState(false)
  const [products, setProducts] = useState()

  const [currentPage, setCurrentPage] = useState(1); 
  const [totalProducts, setTotalProducts] = useState(0); 

  useEffect(() => {
    getAllProducts(`pageNumber=${currentPage}&PRODUCT_PER_PAGE=${10}`).then(data=> {
      setProducts(data?.data?.products);      
      setTotalProducts(data?.totalProductCount)
    })
  }, [refresh, currentPage])
  
  return (
    <div className="p-4">
      <div className="shadow-sm p-2 d-flex justify-content-between align-items-center">
        <span className="bold">Products</span>
        <AddProducts setRefresh={setRefresh}/>
      </div>
      <Table responsive striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>description</th>
            <th>Price</th>
            <th>Checkouts</th>
            <th>Created at</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((product) => {
            return (
              <tr key={product}>
                <td>
                  <Image
                    src={baseURL + product.image[0].url}
                    width={"40px"}
                    height={"40px"}
                  />
                </td>
                <td>
                  <Link to={`/product/${product._id}`} style={{color: '#000'}}>{product.name}</Link>
                </td>
                <td>{product?.description.length > 70 ? product?.description?.slice(0, 70)  + '...': product?.description}</td>
                <td>{product.price}</td>
                {/* TODO : add checkouts */}
                <td>50</td>
                <td>{formatISODate(product.createdAt)}</td>
                <td className="d-flex gap-2">
                  <AddProducts product={product} setRefresh={setRefresh}/>
                  <UpdateImageProduct product={product} setRefresh={setRefresh}/>
                  <DeleteProductButton handeler={() => deleteProduct(product._id)} setRefresh={setRefresh} msg={'Do you really want to delete the product ?'} />
                </td>
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
  );
}

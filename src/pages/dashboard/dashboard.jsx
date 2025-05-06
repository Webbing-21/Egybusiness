import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PaginationComponent from "../../Components/pagination/PaginationComponent";
import { deleteCategory } from "../../apis/products/category";
import AddCategoryComponent from "../../Components/dashboard/category/AddCategory";
import { getChart } from "../../apis/products/charts";
import DeleteProductButton from "../../Components/dashboard/products/DeleteProductButton";

export default function DashboardPage() {
  const [refresh, setRefresh] = useState(1);
  const [charts, setCharts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCategories, setTotalCategories] = useState(0);

  useEffect(() => {
    getChart(`?page=${currentPage}&limit=${10}`).then((res) => {
      setCharts(res.data);
      setTotalCategories(res.data.totalCategories);
    });
  }, [refresh, currentPage]);

  return (
    <div className="p-4">
      {charts && (
        <div>
          <Row xs={1} md={3} className="mb-4">
            <Col>
              <Card body>
                <Card.Title className="bold primary-color">{charts.totalProducts}</Card.Title>
                <Card.Title>Products</Card.Title>
              </Card>
            </Col>
            <Col className="mt-4 mt-md-0">
              <Card body>
                <Card.Title className="bold primary-color">{charts.totalUsers}</Card.Title>
                <Card.Title>Users</Card.Title>
              </Card>
            </Col>
            <Col className="mt-4 mt-md-0">
              <Card body>
                <Card.Title className="bold primary-color">{charts.totalCategories}</Card.Title>
                <Card.Title>Categories</Card.Title>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="mt-4 mt-md-0">
              <Card body>
                <Card.Title className="bold primary-color">{charts.totalCheckouts}</Card.Title>
                <Card.Title>Checkouts</Card.Title>
              </Card>
            </Col>
            <Col>
              <Card body className="mt-4 mt-md-0">
                <Card.Title className="bold primary-color">{charts.totalAmount}</Card.Title>
                <Card.Title>Amount</Card.Title>
              </Card>
            </Col>
          </Row>
        </div>
      )}

      <div className="pe-3 py-4 d-flex justify-content-between">
        <div className="bold primary-color">Categories</div>
        <div>
          <AddCategoryComponent setRefresh={setRefresh} />
        </div>
      </div>

      <Table responsive striped bordered hover className="mt-3 overflow">
        <thead>
          <tr>
            <th>Title</th>
            <th>Products count</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {charts &&
            charts.categoryStats.map((category) => {
              return (
                <tr key={category.category}>
                  <td>
                    <Link
                      to={`/products?category=${category.category}`}
                      style={{ color: "#000" }}
                    >
                      {category.category}
                    </Link>
                  </td>
                  <td>{category.productCount}</td>
                  <td className="d-flex gap-2">
                    <DeleteProductButton 
                      handeler={() => deleteCategory(category.id)} 
                      setRefresh={setRefresh} 
                      msg={'Do you really want to delete the category ?'} 
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <div className="d-flex justify-content-center">
        <PaginationComponent
          setCurrentPage={setCurrentPage}
          totalProducts={totalCategories}
          productsPerPage={10}
        />
      </div>
    </div>
  );
}


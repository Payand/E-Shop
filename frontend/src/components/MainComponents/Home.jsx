import React from "react";
import { Row, Col } from "react-bootstrap";
import productsApi from "../../productsApi";
import Products from "./Products";
const Home = () => {
  return (
    <div>
      <h1>Products</h1>
      <Row>
        {productsApi.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;

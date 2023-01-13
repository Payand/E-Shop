import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Products from "./Products";
import axios from "axios";
const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await axios.get("/api/products/");
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;

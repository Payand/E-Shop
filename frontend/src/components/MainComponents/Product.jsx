import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Rating from "../RatingComponents/Rating";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  const fetchProduct = async () => {
    const { data } = await axios.get(`/api/products/${params.id}`);
    setProduct(data);
  };
  useEffect(() => {
    fetchProduct();
  }, [params]);

  return (
    <div className="px-5">
      <NavLink to="/" className="btn btn-light my-3">
        Go Back
      </NavLink>
      <Row>
        <Col md={4}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3} className="mx-4">
          <ListGroup variant="flat">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>

            <ListGroup.Item>Price: {product.price}</ListGroup.Item>

            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? (
                      <strong>
                        <b>In Stock</b>
                      </strong>
                    ) : (
                      "Out of stock"
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Product;

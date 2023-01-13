import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Rating from "../RatingComponents/Rating";

const Products = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <NavLink to={`/product/${product.id}`}>
        <Card.Img src={product.image} />
      </NavLink>
      <Card.Body>
        <NavLink
          style={{ textDecoration: "none" }}
          to={`/product/${product.id}`}
        >
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </NavLink>
        <Card.Text as="div">
          <div className="my-3 ">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Products;

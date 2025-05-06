import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { baseURL } from "../../lib/axios.lib";
import { formatNumber } from "../../lib/formatNumber";
import style from "./productCard.module.css";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`}>
      <Card className={style.cardProduct + " card-product"}>
        {product.discount > 0 && (
          <Badge
            bg="success"
            style={{ position: "absolute", top: "5px", right: "5px" }}
          >
            {product.discount}%
          </Badge>
        )}
        <Card.Img
          variant="top"
          src={baseURL + product.image[0].url}
          style={{ padding: "4px", borderRadius: "10px 10px 0 0" }}
          className={style.imageProduct}
        />
        <Card.Body>
          <Card.Title className={style.cardTitle} style={{ color: "#555" }}>
            {product.name}
          </Card.Title>
          {/* {product.weight && (
            <Card.Text className="">{product.weight}</Card.Text>
          )} */}
            {product.discount > 0 ? (
              <Card.Text
                className="d-flex justify-content-between"
              >
                <span className={style.price + " original-price"}>
                  ${formatNumber(product.price)}
                </span>
                {product.discount && (
                  <span className={style.price + " green"}>
                    ${formatNumber(product.currentPrice)}
                  </span>
                )}
              </Card.Text>
            ) : (
              <Card.Text className={style.price + " primary-color"} style={{ color: "#444" }}>
                {product?.currentPrice < 1 ? (
                  <Badge bg="success">free</Badge>
                ) : (
                  `$${formatNumber(product?.currentPrice || product?.price)}`
                )}
              </Card.Text>
            )}
        </Card.Body>
      </Card>
    </Link>
  );
}

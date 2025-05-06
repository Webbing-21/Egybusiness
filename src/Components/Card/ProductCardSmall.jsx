import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { baseURL } from "../../lib/axios.lib";
import { formatNumber } from "../../lib/formatNumber";
import style from './productCard.module.css'

export default function ProductCardSmall({ product }) {
  return (
    <Link to={`/product/${product._id}`} className={"d"}>
      <Card className={style.cardProduct + " card-product text-center"}>
      {product.discount > 0 && <Badge bg="success" style={{position: 'absolute', top: '5px', right: '5px'}}>{product.discount}%</Badge>}
        <Card.Img 
          variant="top"
          src={baseURL + product.image[0].url}
          style={{ padding: "4px", borderRadius: '10px 10px 0 0' }}
          className={style.imageProduct}
        />
        <Card.Body>
          <Card.Title className={style.cardTitle} style={{color: '#555'}}>{product.name}</Card.Title>
          {/* {product.weight && (
            <Card.Text className="">{product.weight}</Card.Text>
          )} */}
          {product.discount > 0? (
            <Card.Text className="d-flex justify-content-between">
              <span className={style.price + " text-success bold"} >
                ${formatNumber(product.currentPrice)}
              </span>
              <span className={style.price + " original-price"}>${formatNumber(product.price)}</span>
            </Card.Text>
          ) : (
            <Card.Text className={style.price + " primary-color bold"}>
              ${formatNumber(product.price)}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Link>
  );
}

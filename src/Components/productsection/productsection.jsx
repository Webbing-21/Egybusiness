import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import style from "./productsection.module.css";
import { Link } from "react-router-dom";
import ProductCard from "../Card/ProductCard";
import ProductCardSmall from "../Card/ProductCardSmall";
import { getAllProducts } from "../../apis/products/product";
export default function Productsection({ products, title, small, link}) {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState()
  useEffect(() => {
    
    if (link === 'bestSeller') {
      getAllProducts(`bestSeller=1`).then(res => {
        setProduct(res?.data?.products?.slice(0, 8))
        setLoading(false)
      })
    }if (link === 'onSales') {
      getAllProducts(`onSales=1`).then(res => {
        setProduct(res?.data?.products?.slice(0, 8))
        setLoading(false)
      })
    } else {
      products?.length > 0 && setLoading(false)
      setProduct(products?.slice(0, 10))
    }
  }, [products])

  

  return (
    <>
      <div className="container">
        <div className={style.adress}>
          <h3 className="bold">{title}</h3>
          <Link to={`/products${link ? "?filter="+link:"" }`} className={style.seeall}>
            <div className={style.seee}>
              See all
              <IoIosArrowForward className={style.arrow} />
            </div>
          </Link>
        </div>

       {!loading ? <div className={style.product_container}>
          {product&& product.map((product) => (
            small ? <ProductCardSmall product={product} key={product._id} /> : <ProductCard product={product} key={product._id} />
          ))}
        </div>: <div style={{color: 'grey'}}>Loading ..</div>}
      </div>
    </>
  );
}

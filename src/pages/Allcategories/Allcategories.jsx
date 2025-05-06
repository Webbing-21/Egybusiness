import React from "react";
import style from "./Allcategories.module.css";
import plastic from "../../Assets/photoes/plastic (1).png";
import plasticbag from "../../Assets/photoes/plastic bag.png";

import img from "../../Assets/photoes/unsplash_IujF-xdHQhw.png";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
export default function Allcategories() {
  const products = [
    { desc: 50.0, image: img, name: "name1", price: 200 },
    {
      desc: 50.0,

      image: img,
      name: "name2",
      price: 200,
    },
    {
      desc: 50.0,
      image: img,
      name: "name3",
      price: 200,
    },
    {
      desc: 50.0,

      image: img,
      name: "name4",
      price: 200,
    },

    {
      desc: 50.0,

      image: img,
      name: "name5",
      price: 200,
    },

    {
      desc: 50.0,

      image: img,
      name: "name6",
      price: 200,
    },
  ];

  return (
    <>
      
      <div className={style.firstpart}>
        <div className={style.overlay}>
          <div className="container">
            <div className={style.text}>
              <h2>Plastic tools</h2>
              <p>Discover new and trending products</p>
            </div>
          </div>
          <div className="alltopcategories">
            <div className="container">
              <div className={style.topcategories}>
                <p>Top categories</p>
                <div className={style.alllinks}>
                  <a href="">
                    <div className={style.firstlink}>
                      <div className="col-md-2">
                        <a to="">
                          <img className={style.plastic} src={plastic} alt="" />
                          <span>Plastic sheets</span>
                        </a>
                      </div>
                    </div>
                  </a>

                  <a href="">
                    <div className={style.firstlink}>
                      <div className="col-md-2">
                        <a to="">
                          <img
                            className={style.plastic}
                            src={plasticbag}
                            alt=""
                          />
                          <span>Plastic sheets</span>
                        </a>
                      </div>
                    </div>
                  </a>

                  <a href="">
                    <div className={style.firstlink}>
                      <div className="col-md-2">
                        <a to="">
                          <img className={style.plastic} src={plastic} alt="" />
                          <span>Plastic sheets</span>
                        </a>
                      </div>
                    </div>
                  </a>
                  <a href="">
                    <div className={style.firstlink}>
                      <div className="col-md-2">
                        <a to="">
                          <img
                            className={style.plastic}
                            src={plasticbag}
                            alt=""
                          />
                          <span>Plastic sheets</span>
                        </a>
                      </div>
                    </div>
                  </a>

                  <a href="">
                    <div className={style.firstlink}>
                      <div className="col-md-2">
                        <a to="">
                          <img className={style.plastic} src={plastic} alt="" />
                          <span>Plastic sheets</span>
                        </a>
                      </div>
                    </div>
                  </a>

                  <a href="">
                    <div className={style.firstlink}>
                      <div className="col-md-2">
                        <a to="">
                          <img
                            className={style.plastic}
                            src={plasticbag}
                            alt=""
                          />
                          <span>Plastic sheets</span>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////////////second part////////////////////////////////////////////////////// */}

      <div className="ssecond">
        <div className="container">
          <div className={style.secondpart}>
            <div className={style.overlay2}>
              <div className={style.textsecondpart}>
                <h3>
                  Get a <span className={style.orangespan2}> 30%</span> discount
                  on your order when <br /> you order more than 5 kilos
                </h3>
                <span className={style.orangespan}> Explore Now </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////////////third part/////////////////////////////// */}

      <div className={style.partthree}>
        <div className="container">
          <div className={style.adress}>
            <h3 className="bold">Products</h3>
            <Link className={style.seeall}>
              <div className={style.seee}>
                See all
                <IoIosArrowForward className={style.arrow} />
              </div>
            </Link>
          </div>

          <div className={style.products}>
            {products.map((product, index) => (
              <div key={index} className={style.product}>
                <Link to={`/product/${index}`}>
                  <div className={style.allproduct}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                    {product.wight && <p className="wight">{product.wight}</p>}
                    <div className="salary">
                      <p className="price">${product.price}</p>
                      {product.desc && <p className="desc">{product.desc}</p>}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className={style.adress}>
            <h3 className="bold">Products</h3>
            <Link className={style.seeall}>
              <div className={style.seee}>
                See all
                <IoIosArrowForward className={style.arrow} />
              </div>
            </Link>
          </div>

          <div className={style.products}>
            {products.map((product, index) => (
              <div key={index} className={style.product}>
                <div className={style.allproduct}>
                  <img src={product.image} alt={product.name} />
                  <p>{product.name}</p>
                  {product.wight && <p className="wight">{product.wight}</p>}
                  <div className="salary">
                    <p className="price">${product.price}</p>
                    {product.desc && <p className="desc">{product.desc}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className={style.adress}>
            <h3 className="bold">Products</h3>
            <Link className={style.seeall}>
              <div className={style.seee}>
                See all
                <IoIosArrowForward className={style.arrow} />
              </div>
            </Link>
          </div>

          <div className={style.products}>
            {products.map((product, index) => (
              <div key={index} className={style.product}>
                <div className={style.allproduct}>
                  <img src={product.image} alt={product.name} />
                  <p>{product.name}</p>
                  {product.wight && <p className="wight">{product.wight}</p>}
                  <div className="salary">
                    <p className="price">${product.price}</p>
                    {product.desc && <p className="desc">{product.desc}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

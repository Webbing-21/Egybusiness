import React, { useEffect, useState } from "react";
import "./favorite.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../lib/axios.lib";
import FavoriteEmpty from "./favorite_empty";
import { DeleteFromFavorite, getAllFavorite } from "../../apis/products/favorite";
import { AddToCart } from "../../apis/products/cart";
import LoadingPage from "../../Components/Loading/Loading";

function FavoritePage() {
  const navigate = useNavigate();
  let [refresh, setRefresh] = useState(false);
  let [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getAllFavorite().then((data) => {
      setFavorites(data?.data?.favorites);
      setLoading(false)
    });
  }, [refresh]);


  return (
    <div className="container">
      <section className="favorite_header">
        <Button variant="light" onClick={() => navigate(-1)}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.0312 10.9375L17.9688 25L32.0312 39.0625"
              stroke="black"
              strokeWidth="3.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Favorite
        </Button>
      </section>
      {!loading ? favorites.length > 0 ? (
        <main>
          <section
            style={{ width: "100%", height: "80vh" }}
            className="overflow-auto favorite-scroll"
          >
            {favorites && favorites.map((favorite, index) => {
              return (
                <div className="favorite_card" key={favorite._id}>
                  { <img src={baseURL + favorite?.product?.image[0]?.url} width="100px" height="100px" alt="" />}
                  <div className="favorite-details">
                    <div className="d-flex justify-content-between">
                      <h2>{favorite?.product?.name}</h2>
                      {/* <span>
                        ${formatNumber(favorite.total)}
                        {favorite.discount && (
                          <>
                            <span> - </span>
                            <span style={{ color: "green" }}>
                              {favorite.discount}%
                            </span>
                          </>
                        )}
                      </span> */}
                    </div>
                    <div className="pieces-stack">
                      <span>{favorite?.product?.pieces} pieces</span>
                      <span style={{ color: "#bbb" }}>|</span>
                      <span className="primary-color">In stock</span>
                    </div>
                    <div className="d-flex flex-column flex-lg-row justify-content-lg-end count_buttons_save gap-2">
                      <span style={{ color: "#bbb" }} className="d-none">
                        |
                      </span>
                      <div className="d-flex align-items-center button-save">
                        <Button className="d-flex align-items-center gap-1" variant="light" onClick={() => AddToCart(favorite?.product?._id, 1)}>
                          <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                          Add To Cart
                        </Button>
                        <span
                          className="d-none d-lg-flex"
                          style={{ color: "gray", padding: "0px 4px" }}
                        >
                          |
                        </span>
                        <Button onClick={() => DeleteFromFavorite(favorite?._id).then(e => setRefresh(true))} variant="light">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 40 40"
                            className="mx-2"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11.667 35C10.7503 35 9.96588 34.6739 9.31366 34.0217C8.66144 33.3694 8.33477 32.5844 8.33366 31.6667V10H6.66699V6.66667H15.0003V5H25.0003V6.66667H33.3337V10H31.667V31.6667C31.667 32.5833 31.3409 33.3683 30.6887 34.0217C30.0364 34.675 29.2514 35.0011 28.3337 35H11.667ZM28.3337 10H11.667V31.6667H28.3337V10ZM15.0003 28.3333H18.3337V13.3333H15.0003V28.3333ZM21.667 28.3333H25.0003V13.3333H21.667V28.3333Z" />
                          </svg>
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </main>
      ) : (
          <FavoriteEmpty />
      ): <LoadingPage />}
    </div>
  );
}

export default FavoritePage;

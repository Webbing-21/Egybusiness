import React, { useEffect } from 'react'
import { formatNumber } from '../../lib/formatNumber'
import { DeleteFromCart, UpdateCart } from '../../apis/products/cart'
import { Button, ButtonGroup } from 'react-bootstrap'
import { baseURL } from '../../lib/axios.lib'
import useCountity from '../../hook/countity'

export default function CartProduct({cart , setRefresh}) {
    const {count, increment, decrement} = useCountity(cart.count) 
    useEffect(() => {
        if(cart.count != count) {
            UpdateCart(cart._id, count).then(e => setRefresh(st => !st))
        }
    }, [count])
  return (
    <div className="cart_card" >
        <img src={baseURL + cart.product.image[0].url} width="100px" height="100px" alt="" />
        <div className="cart-details">
        <div className="d-flex justify-content-between">
            <h2>{cart.product.name}</h2>
            <span>
            ${formatNumber(cart.total)}
            {cart.discount && (
                <>
                <span> - </span>
                <span style={{ color: "green" }}>
                    {cart.discount}%
                </span>
                </>
            )}
            </span>
        </div>
        <div className="pieces-stack">
            <span>{cart.product.pieces} pieces</span>
            <span style={{ color: "#bbb" }}>|</span>
            <span className="primary-color">In stock</span>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-lg-between count_buttons_save gap-2">
            <ButtonGroup
            aria-label="Basic example"
            className="d-flex "
            >
            <Button
                variant="light"
                onClick={() => increment()}
            >
                +
            </Button>
            <span className="count">{count}</span>
            <Button
                variant="light"
                onClick={() => decrement()}
            >
                -
            </Button>
            </ButtonGroup>
            <span style={{ color: "#bbb" }} className="d-none">
            |
            </span>
            <div className="d-flex align-items-center button-save">
            <Button variant="light">
                <svg
                width="18"
                height="18"
                viewBox="0 0 40 40"
                className="mx-1"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M19.9997 35.0013L17.583 32.8346C14.7775 30.3069 12.458 28.1263 10.6247 26.293C8.79134 24.4596 7.33301 22.8135 6.24967 21.3546C5.16634 19.8957 4.40967 18.5557 3.97967 17.3346C3.54967 16.1135 3.33412 14.8635 3.33301 13.5846C3.33301 10.9735 4.20801 8.79297 5.95801 7.04297C7.70801 5.29297 9.88856 4.41797 12.4997 4.41797C13.9441 4.41797 15.3191 4.72352 16.6247 5.33464C17.9302 5.94575 19.0552 6.80686 19.9997 7.91797C20.9441 6.80686 22.0691 5.94575 23.3747 5.33464C24.6802 4.72352 26.0552 4.41797 27.4997 4.41797C30.1108 4.41797 32.2913 5.29297 34.0413 7.04297C35.7913 8.79297 36.6663 10.9735 36.6663 13.5846C36.6663 14.8624 36.4513 16.1124 36.0213 17.3346C35.5913 18.5569 34.8341 19.8969 33.7497 21.3546C32.6652 22.8124 31.2069 24.4585 29.3747 26.293C27.5425 28.1274 25.223 30.308 22.4163 32.8346L19.9997 35.0013ZM19.9997 30.5013C22.6663 28.1124 24.8608 26.0641 26.583 24.3563C28.3052 22.6485 29.6663 21.1624 30.6663 19.898C31.6663 18.6335 32.3608 17.508 32.7497 16.5213C33.1386 15.5346 33.333 14.5557 33.333 13.5846C33.333 11.918 32.7775 10.5291 31.6663 9.41797C30.5552 8.30686 29.1663 7.7513 27.4997 7.7513C26.1941 7.7513 24.9858 8.11908 23.8747 8.85463C22.7636 9.59019 21.9997 10.528 21.583 11.668H18.4163C17.9997 10.5291 17.2358 9.59186 16.1247 8.8563C15.0136 8.12075 13.8052 7.75241 12.4997 7.7513C10.833 7.7513 9.44412 8.30686 8.33301 9.41797C7.2219 10.5291 6.66634 11.918 6.66634 13.5846C6.66634 14.5569 6.86079 15.5363 7.24967 16.523C7.63856 17.5096 8.33301 18.6346 9.33301 19.898C10.333 21.1613 11.6941 22.6474 13.4163 24.3563C15.1386 26.0652 17.333 28.1135 19.9997 30.5013Z" />
                </svg>
                Save
            </Button>
            <span
                className="d-none d-lg-flex"
                style={{ color: "gray", padding: "0px 4px" }}
            >
                |
            </span>
            <Button onClick={() => DeleteFromCart(cart._id).then(e => setRefresh(st => !st))} variant="light">
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
  )
}

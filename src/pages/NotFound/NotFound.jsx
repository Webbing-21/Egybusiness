import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
    const navigate = useNavigate()
  return (
    <main className="cart_empty text-center my-5">
      <section className="d-flex justify-content-center align-items-center">
        {/* <img style={{ width: "250px" }} src={image} alt="" srcSet="" /> */}
      </section>
      <section className="d-flex justify-content-center flex-column align-items-center gap-4">
        <h1>Not Found</h1>
        <Button onClick={() => navigate(-1)} variant="light" size="lg" className="primary-bg ">
            Back
        </Button>
      </section>
    </main>
  )
}

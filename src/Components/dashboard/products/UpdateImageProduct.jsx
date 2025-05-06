import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { updateProductImage } from "../../../apis/products/product";

export default function UpdateImageProduct({ product, setRefresh}) {
  const [modalShow, setModalShow] = useState(false);
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;

    if (files.length !== 3) {
      toast.error("Please select exactly 3 images.");
      setImages([]);
      return;
    }

    setImages([...files]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

      if (
        images.length !== 3
      ) {
        toast.error("Please fill all fields and upload exactly 3 images.");
        return;
      }

    const formData = new FormData();

      images.forEach((image) => {
        formData.append("images", image);
      });
    

    try {
    const response = await updateProductImage(product._id,formData).then(e=> {
      toast.success("Product added successfully!")
      setRefresh(e => {
        return !e
      })
    });
    } catch (error) {
      toast.error("Error adding product. Please try again.")
    }
  };

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>Update images</Button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen="xxl-down"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {product ? "Edit product" : "Add product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Images</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                />
              </Form.Group>
            </Row>

            

           
            <Row className="mb-3 px-4">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

// دالة API لإضافة كاتجوري
const addCategory = async (formData) => {
  const response = await axios.post(
    "http://194.164.77.238:8001/api/category",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

export default function AddCategoryComponent({ setRefresh }) {
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !image) {
      toast.error("Please provide both name and image.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", image);

      // Debug: عرض البيانات قبل الإرسال
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      const response = await addCategory(formData);

      if (response) {
        setRefresh((e) => !e);
        toast.success("Category added successfully!");
        setModalShow(false);
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Error adding category. Please try again.");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Category
      </Button>
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
            Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridImage">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
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
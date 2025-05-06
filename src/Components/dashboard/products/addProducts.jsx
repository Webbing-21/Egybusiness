import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { addProduct, updateProduct } from "../../../apis/products/product";
import { toast } from "react-toastify";
import { getAllCategory } from "../../../apis/products/category";

export default function AddProducts({ product, setRefresh }) {
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || "",
    color: product?.color || "",
    weight: product?.weight || "",
    shipping: product?.shipping || "",
    brand: product?.brand || "",
    theShape: product?.theShape || "",
    saller: product?.saller || "",
    specialFeatures: product?.specialFeatures || "rvini",
    category: product?.category || "",
    discount: product?.discount || "",
    tags: product?.tags || ""
  });

  const [categories, setCategories] = useState([{_id: 'id', name: "food" }]);
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getAllCategory().then(res => {
      setCategories(res?.data?.categories)
    })
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    
    if (files.length !== 3) {
      setErrors(prev => ({
        ...prev,
        images: "Please select exactly 3 images."
      }));
      setImages([]);
      return;
    }
    
    setImages(files);
    setErrors(prev => ({
      ...prev,
      images: null
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      'name', 'description', 'price', 'color', 'weight', 
      'shipping', 'brand', 'theShape', 'saller', 'category'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });
    
    if (!product && images.length !== 3) {
      newErrors.images = "Please upload exactly 3 images";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fill all required fields correctly.");
      return;
    }
  
    const data = new FormData();
    
    // Append all form data except tags
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'tags' && value !== undefined && value !== null) {
        data.append(key, value);
      }
    });
  
    // Convert tags string to array and append properly
    const tagsArray = formData.tags 
      ? formData.tags.trim().split(/\s+/).filter(tag => tag !== '')
      : [];
    
    // Append each tag individually
    tagsArray.forEach((tag, index) => {
      data.append(`tags[${index}]`, tag);
    });
  
    // Alternative if your backend expects JSON:
    // data.append('tags', JSON.stringify(tagsArray));
  
    if (!product) {
      images.forEach(image => {
        data.append("images", image);
      });
    }
  
    try {
      if (product) {
        await updateProduct(product._id, {
          ...formData,
          tags: tagsArray, // Send as array
          price: parseInt(formData.price),
          discount: parseInt(formData.discount || 0)
        });
        toast.success("Product updated successfully!");
      } else {
        await addProduct(data);
        toast.success("Product added successfully!");
      }
      
      setRefresh(prev => !prev);
      setModalShow(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error processing your request. Please try again.");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        {product ? "Edit product" : "Add product"}
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
            {product ? "Edit product" : "Add product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Title product"
                  onChange={handleInputChange}
                  value={formData.name}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Enter the description"
                  onChange={handleInputChange}
                  value={formData.description}
                  isInvalid={!!errors.description}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  min={0}
                  onChange={handleInputChange}
                  value={formData.price}
                  isInvalid={!!errors.price}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group as={Col} controlId="formGridColor">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  name="color"
                  placeholder="Enter Color"
                  onChange={handleInputChange}
                  value={formData.color}
                  isInvalid={!!errors.color}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.color}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridSaller">
                <Form.Label>Seller</Form.Label>
                <Form.Control
                  type="text"
                  name="saller"
                  placeholder="Seller"
                  onChange={handleInputChange}
                  value={formData.saller}
                  isInvalid={!!errors.saller}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.saller}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWeight">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  type="text"
                  name="weight"
                  placeholder="Enter weight"
                  onChange={handleInputChange}
                  value={formData.weight}
                  isInvalid={!!errors.weight}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.weight}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridShipping">
                <Form.Label>Shipping</Form.Label>
                <Form.Control
                  type="text"
                  name="shipping"
                  placeholder="Shipping"
                  onChange={handleInputChange}
                  value={formData.shipping}
                  isInvalid={!!errors.shipping}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.shipping}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTheShape">
                <Form.Label>The Shape</Form.Label>
                <Form.Control
                  type="text"
                  name="theShape"
                  placeholder="Enter the shape"
                  onChange={handleInputChange}
                  value={formData.theShape}
                  isInvalid={!!errors.theShape}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.theShape}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridBrand">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  onChange={handleInputChange}
                  value={formData.brand}
                  isInvalid={!!errors.brand}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.brand}
                </Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group as={Col} controlId="formGridCategory">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  onChange={handleInputChange}
                  value={formData.category}
                  isInvalid={!!errors.category}
                >
                  <option value="">Choose...</option>
                  {categories?.map((cat) => (
                    <option key={cat._id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.category}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridDiscount">
                <Form.Label>Discount</Form.Label>
                <Form.Control
                  type="number"
                  name="discount"
                  placeholder="Enter discount"
                  min={0}
                  max={100}
                  onChange={handleInputChange}
                  value={formData.discount}
                />
              </Form.Group>
              
              <Form.Group as={Col} controlId="formGridSpecialFeatures">
                <Form.Label>Special Features</Form.Label>
                <Form.Control
                  type="text"
                  name="specialFeatures"
                  placeholder="Enter special features"
                  onChange={handleInputChange}
                  value={formData.specialFeatures}
                />
              </Form.Group>
            </Row>
            
            <Row className="mb-3">
              {!product && (
                <Form.Group as={Col} controlId="formGridImages">
                  <Form.Label>Images (Exactly 3 required)</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    isInvalid={!!errors.images}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.images}
                  </Form.Control.Feedback>
                  {images.length > 0 && (
                    <div className="mt-2">
                      <small>Selected files: {images.map(img => img.name).join(', ')}</small>
                    </div>
                  )}
                </Form.Group>
              )}
              
              <Form.Group as={Col} controlId="formGridTags">
                <Form.Label>Tags</Form.Label>
                <Form.Control
                  type="text"
                  name="tags"
                  placeholder="Enter tags, separated by spaces"
                  onChange={handleInputChange}
                  value={formData.tags}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 px-4">
              <Button variant="primary" type="submit">
                {product ? "Update Product" : "Add Product"}
              </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
import React, { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";

function ProjectsCard({ title, description, img, link }) {
  const [showModal, setShowModal] = useState(false);

  // Handle modal show
  const handleModalShow = () => {
    setShowModal(true);
    changeZIndex("-1"); // Change z-index when modal shows
  };

  // Handle modal close
  const handleModalClose = () => {
    setShowModal(false);
    changeZIndex("9999"); // Reset z-index when modal closes (or to a default value)
  };

  // Function to change the z-index of the navbar or any element
  const changeZIndex = (value) => {
    const elements = document.getElementsByClassName("navbar");
    if (elements.length > 0) {
      elements[0].style.zIndex = value; // Set the new z-index value
    }
  };

  return (
    <>
      <Col sm={6} md={4}>
        <div className="project-image-box" onClick={handleModalShow}>
          <img src={img} alt="project" />
          <div className="text">
            <h3>{title}</h3>
            <p className="text-para">{description}</p>
          </div>
        </div>
      </Col>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose} dialogClassName="modal-centered">
        <Modal.Header closeButton style={{ backgroundColor: "#f1f1f1", color: "#333" }}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#fafafa", color: "#555" }}>
          <img src={img} alt="project" className="img-fluid mb-3" />
          <p>{description}</p>
          {/* Centered Button */}
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              href={link}
              target="_blank" // Open the link in a new tab
            >
              Live
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectsCard;

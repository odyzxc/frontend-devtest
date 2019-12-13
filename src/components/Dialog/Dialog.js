import React from "react";
import { Modal, Button } from "react-bootstrap";

import { strings } from "common/constants";

const Dialog = ({
  title,
  message,
  onClose,
  onSubmit,
  submitText = strings.modal.defaultSubmitButtonText,
  visible
}) => {
  const handleSubmit = () => {
    onSubmit();
    onClose();
  };
  return (
    <Modal show={visible} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          {strings.modal.closeButtonText}
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {submitText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Dialog;

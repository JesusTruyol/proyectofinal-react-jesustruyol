import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Modals({title,text}){
  const [show, setShow] = useState(true);

  const handleOK = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     
      <Modal show={show} onHide={handleOK}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleOK}>
            ok
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

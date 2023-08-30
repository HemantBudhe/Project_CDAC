import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CustomModal({ show, onHide, children }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Job Applier List</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomModal;

import React from "react";
import {Button, Modal} from "react-bootstrap";


export default function DeleteModal(props) {

    const {isOpen = false, onClose, onDelete, title} = props;

    return (
        <Modal show={isOpen} size="sm" onHide={onClose}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='justify-content-between d-flex'>
                    <Button variant="outline-info" onClick={onClose}>Cancel</Button>
                    <Button variant="danger" onClick={onDelete}>Delete</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}
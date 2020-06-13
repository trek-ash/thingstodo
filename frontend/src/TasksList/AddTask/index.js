import React, { useState } from "react";
import {InputGroup, FormGroup, Form, Button,  Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';

const AddTask = (props) => {
    const [title, updateTitle] = useState("")
    const [description, updateDescription] = useState("")
    const [category, updateCategory] = useState("")
    return(
        <React.Fragment>
            <Modal show={props.show} onHide={props.handleClose} >
                <Modal.Header closeButton>
                <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <Form.Label for="title">Title</Form.Label>
                        <Form.Control type="text" maxLength='20' placeholder="Required" name="title" id="title" onChange={(e)=>updateTitle(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label for="description">Description</Form.Label>
                        <Form.Control type="text"  maxLength='50' placeholder="Required" name="description" id="description" onChange={(e)=>updateDescription(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label for="category">Category</Form.Label>
                        <Form.Control type="text" maxLength='50' placeholder="Required" name="category" id="category" onChange={(e)=>updateCategory(e.target.value)}/>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>props.saveTask(title, description, category)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default AddTask
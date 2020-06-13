import React, {useState} from "react";
import {InputGroup, FormGroup, Form, Button,  Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';

const Login = () => {
    const [username, updateUsername] = useState("")

    return(
        <React.Fragment>
            <h2>Just choose a username to start!</h2>
            <div className="login">
                
                <FormGroup>
                    <Form.Label for="title">Username</Form.Label>
                    <Form.Control type="text" maxLength='20' placeholder="Required" name="title" id="title" onChange={(e)=>updateUsername(e.target.value)}/>
                </FormGroup>
            </div>
        </React.Fragment>
    )
}
export default Login
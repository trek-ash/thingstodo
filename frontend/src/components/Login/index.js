import React, {useState} from "react";
import {InputGroup, FormGroup, Form, Button,  Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';

const Login = (props) => {
    const [username, updateUsername] = useState("")

    return(
        <React.Fragment>
            <h2 className="my-4">Just choose a username to start!</h2>
            <div className="login p-3 mt-5">
                
                <FormGroup>
                    <Form.Label for="username"><b>Username</b></Form.Label>
                    <Form.Control type="text" maxLength='20' placeholder="Required" className="mt-3" name="username" id="username" onChange={(e)=>updateUsername(e.target.value)}/>
                </FormGroup>
                <Button variant="success" className="float-right" onClick={()=>props.saveUsername(username)}>
                    Continue
                </Button>
                <div style={{clear: "both"}}></div>
            </div>
        </React.Fragment>
    )
}
export default Login
import React, {useState} from "react";
import {InputGroup, FormGroup, Form, Button,  Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import userAPI from "../../services/users"
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const [username, updateUsername] = useState("")
    const [password, updatePassword] = useState("")
    const history = useHistory();
    const saveUser = () =>  {
        userAPI.addUser({username, password})
        .then(res=>{
          if(res.status==200)   {
            sessionStorage.setItem("uid", res.data[0].username)
            history.push("/tasks")
          }
        })
        .catch(err=>{
          console.log(err)
        })
      }
    return(
        <React.Fragment>
            <h2 className="my-4">Just choose a username and password to start</h2>
            <p>If you already registered, you are good to go with your secrets!</p>
            <div className="login p-3 mt-5">
                
                <FormGroup>
                    <Form.Label for="username"><b>Username</b></Form.Label>
                    <Form.Control type="text" maxLength='20' placeholder="Required" className="mt-3" name="username" id="username" onChange={(e)=>updateUsername(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Form.Label for="password"><b>Password</b></Form.Label>
                    <Form.Control type="password" maxLength='20' placeholder="Required" className="mt-3" name="password" id="password" onChange={(e)=>updatePassword(e.target.value)}/>
                </FormGroup>
                <Button variant="success" className="float-right" onClick={()=>saveUser()}>
                    Continue
                </Button>
                <div style={{clear: "both"}}></div>
            </div>
        </React.Fragment>
    )
}
export default Login
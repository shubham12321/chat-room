import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'react-bootstrap';
import './first.css'

const First = () =>{
    return(<div id="back">
      <div id="button">
      <Button variant="primary"><a href="/login">Login</a></Button>
      <Button variant="danger"><a href="/signup">Register</a></Button>
      </div>      
    </div>);
}


export default First;
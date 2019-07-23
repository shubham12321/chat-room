import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput,MDBBtn, MDBIcon } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './signup.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import * as firebase from "firebase/app";
import "firebase/auth";


const SignUp = ({googleLogin,emailSignUp,getEmail,getPass,getName}) => {


  return (
    <div id="log">
    <MDBContainer id="signup">
      <MDBRow>
        <MDBCol md="5">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign up</strong>
                </h3>
              </div>
              <MDBInput 
                label="Enter your Name"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={getName}
              />

              <MDBInput label="Your email" group type="text" validate  onChange={getEmail}/>
              <MDBInput label="Your password" group type="password" validate onChange={getPass}/>
            
              <MDBRow className="d-flex align-items-center mb-4">
                <MDBCol md="6" className="text-center">
                
                
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                   onClick={emailSignUp}
                >
                Sign Up
                </MDBBtn>
                </MDBCol>
                <MDBCol md="6">
                  <p className="font-small grey-text d-flex justify-content-end">
                    Have an account?
                    <Link to="login" className="blue-text ml-1">

                      Log in
                    </Link>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
            <div className="footer pt-3 mdb-color white">
              <MDBRow className="d-flex justify-content-center">
                <p className="font-small blue-text mb-2 pt-3">
                  or Sign up with:
                </p>
              </MDBRow>
              <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                {/* <a href="" className="fa-lg p-2 m-2 fb-ic">
                  <MDBIcon icon="facebook-f" fab size="lg" className="blue-text"> </MDBIcon>
                </a>
                <a href="" className="fa-lg p-2 m-2 tw-ic">
                  <MDBIcon fab icon="twitter" className="fab fa-twitter blue-text fa-lg"> </MDBIcon>
                </a> */}
                <a className="fa-lg p-2 m-2 gplus-ic" >
                  <MDBIcon fab icon="google-plus-g" className="fab fa-google-plus-g blue-text fa-lg" onClick={googleLogin}> </MDBIcon>
                </a>
              </MDBRow>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default SignUp;
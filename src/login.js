import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './login.css'
import { Link, BrowserRouter as Router, } from 'react-router-dom'
import * as firebase from "firebase/app";
import "firebase/auth";

const SignIn = ({googleLogin,emailSignIn,getEmail,getPass,getName}) => {
    return (
      <div id="log">
    <MDBContainer id="login">
      <MDBRow>
        <MDBCol md="5">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <MDBInput 
                label="Name"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={getName}
              />

              <MDBInput 
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChange={getEmail}
              />

              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
                onChange={getPass}
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={emailSignIn}
                >
                 Sign In
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                {/* <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn> */}
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                  onClick={googleLogin}
                  
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <Link to="SignUp" className="blue-text ml-1">

                  Sign Up
                </Link>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    );

}


export default SignIn;


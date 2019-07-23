import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Route, Link, BrowserRouter as Router,withRouter } from 'react-router-dom'

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Chat Room</h5>
            <p>
              Where we can share Ideas with each other
            </p>
          </MDBCol>
          <MDBCol md="6" id="footerLink">
            <h5 className="title">Links</h5>
            <h7><a href="#">First Page</a></h7><br/>
            <h7><a href="/home">Home</a></h7><br/>
            <h7><a href="#">Second Page</a></h7>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Developed By  SPT
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
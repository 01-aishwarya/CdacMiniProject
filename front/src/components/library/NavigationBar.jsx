import { LinkContainer } from "react-router-bootstrap";
import { Navbar ,Nav,NavLink,NavbarBrandn,NavbarCollapse} from "react-bootstrap";
import {Container,Col} from "react-bootstrap";

export function NavigationBar()
{
        return(
                <>
                <Container>
                <Navbar  className="navbar" style={{backgroundColor:"#7FB3D5  ",border:"1px solid white",borderRadius:"10px " }} data-bs-theme="dark" expand="lg">
                        <Container >
                        <Navbar.Brand >  AWS-APP </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
          
        <LinkContainer to="/"> 
          <Nav.Link className="text-light">Home</Nav.Link>
          </LinkContainer>
        
          
          <LinkContainer to="/view-all-animal"> 
          <Nav.Link className="text-light" >View All Animal</Nav.Link>
          </LinkContainer>
      
         

         

          <LinkContainer to="/log-in"> 
          <Nav.Link className="text-light" >Log In</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/sign-up"> 
          <Nav.Link className="text-light" >Sign Up</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/contact-us"> 
          <Nav.Link className="text-light" >Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about-us"> 
          <Nav.Link className="text-light" >About Us</Nav.Link>
          </LinkContainer>
          
          
      
        
          </Nav>
         
          </Navbar.Collapse>
          
          </Container>
      </Navbar>
                </Container>
                       
     
                </>
        );
}
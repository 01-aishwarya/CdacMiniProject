import { LinkContainer} from "react-router-bootstrap";
import { Navbar ,Nav,NavLink,NavbarBrandn,NavbarCollapse} from "react-bootstrap";
import {Container,Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function MunicipalityNavbar(props)
{
       


        return(
                <>
                
               <Container>
                <Row>
                <LinkContainer to="/see-all-query"> 
                <NavLink><h2>See All Query</h2></NavLink>
                
                </LinkContainer>

                </Row>
              
               
               
               </Container>
     
                </>
        );
}
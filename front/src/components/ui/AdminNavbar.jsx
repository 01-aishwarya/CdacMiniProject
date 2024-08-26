
import { LinkContainer} from "react-router-bootstrap";
import { Nav,NavLink} from "react-bootstrap";
import {Container,Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";

export function AdminNavbar(props)
{
        const navigate=useNavigate();


        return(
                <>
                
               <Container>
                <Row className="mb-4">
                <LinkContainer to="/see-all-users"> 
                <NavLink><Button style={{backgroundColor:"#82E0AA "}}>Registered Users</Button></NavLink>
                
                </LinkContainer>

                </Row>
              
                <Row className="mb-4">
                <LinkContainer to="/see-all-animals"> 
                <NavLink><Button style={{backgroundColor:"#82E0AA "}}>Registered Animal</Button> </NavLink>
                </LinkContainer>
                
                </Row>

                <Row className="mb-4">
               
    
    <LinkContainer to="/log-in"> 
    <NavLink className="text-success" ><Button style={{backgroundColor:"#82E0AA "}}>Log Out</Button></NavLink>
    
    </LinkContainer>

   

                </Row>
               
               </Container>
     
                </>
        );
}
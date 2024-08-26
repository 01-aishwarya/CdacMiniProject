import { Container,Row,Col } from "react-bootstrap";

import { ViewAllAnimal } from "./ViewAllAnimal";
import {  useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Button} from "react-bootstrap";


export function AnimalRegistration()
{
      

       const p=useParams();
       const username=p.username;
       const navigate=useNavigate();
console.log(username);
      
        return(<>
                <Container style={{backgroundColor:"#AED6F1",marginTop:"20px",border:"1px solid white",borderRadius:"20px "}}>
              <Row>
                <Col lg={6}>
                <LinkContainer to="/add-animal-to-database"> 
                <Nav.Link><Button className=" mt-5" style={{backgroundColor:"#82E0AA "}}>Register Animal</Button></Nav.Link>
                
                </LinkContainer>
               
                </Col>
                
              </Row>

             
                
             
              <Row>
                <Col lg={2}>
                <Button className=" mt-5 mb-5" style={{backgroundColor:"#82E0AA "}} onClick={()=>{
                 console.log("s "+username);
                 navigate(`/result/${username}`);
                }}>Animal Care Message</Button>
                 
                </Col>
                
              </Row>
                             
               
               
                
              
             
                           
                             
                
                
               
                 
                          
                </Container>  
             </>)
       
}
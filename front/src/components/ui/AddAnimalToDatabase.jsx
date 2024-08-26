import { Container,Row,Col } from "react-bootstrap";

import { SignUpAnimal } from "./SignUpAnimal";
import { AnimalRegistration } from "./AnimalRegistration";


export function AddAnimalToDatabase()
{
       

        return(<>
           <Container className="mt-5 d-flex justify-content-center">
                <Row>
                        

                        <Col  style={{backgroundColor:"#AED6F1",marginTop:"20px",border:"1px solid white",borderRadius:"20px "}}>
                       <SignUpAnimal/>
                        </Col>
                </Row>
           </Container>  
        </>)
}
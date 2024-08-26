import { Container,Row,Col } from "react-bootstrap";

import { EditAnimal } from "./EditAnimal";



export function EditAnimalToDatabase()
{
       

        return(<>
           <Container>
                <Row>
                        <Col lg={3} style={{backgroundColor:"#ECF0F1",marginTop:"20px",paddingTop:"80px"}}>
                     
                        </Col>

                        <Col lg={9} style={{backgroundColor:"#ECF0F1",marginTop:"20px"}}>
                       <EditAnimal/>
                        </Col>
                </Row>
           </Container>  
        </>)
}
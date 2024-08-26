import axios from "axios";
import { useState, useEffect } from "react";
import { Card ,Container,Row,Col} from "react-bootstrap";
import { NavigationBar } from "../library/NavigationBar";

export function ViewAnimal(props) {
        const [animal, setAnimal] = useState([]);
     

       setAnimal(props.obj);

        return (
                <>
<Container className="mb-3">
   <Container >
                    
     
   
                        <Row >

                               
                                {
                                animal.map((an) => {
                                        return (
                                                <Col lg={4} >
                                                        <Card style={{ width: '18rem',marginTop:"100px" }} >
                                                                <Card.Img variant="top" src="{$an.pic}" />
                                                                <Card.Body>
                                                                        <Card.Title>{an.username}</Card.Title>
                                                                        <Card.Text>
                                                                                <p>{an.org}</p>
                                                                                <p>{an.location}</p>
                                                                                <p>{an.situation}</p>
                                                                                <p>{an.msg}</p>
                                                                        </Card.Text>

                                                                </Card.Body>
                                                        </Card>
                                                        </Col>
                                        );
                                })
                        }
                               
                        </Row>
                      </Container>
                      </Container>
                </>
        );
}
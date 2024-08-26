import axios from "axios";
import { useState, useEffect } from "react";
import { Card ,Container,Row,Col} from "react-bootstrap";
import { NavigationBar } from "../library/NavigationBar";

export function ViewAllAnimal() {
        const [animal, setAnimal] = useState([]);

        useEffect(() => {
                fetchAnimal();
        }, []);

        async function fetchAnimal() {
                try {
                        const response = await axios.get("http://127.0.0.1:2400/animal");
                        console.log(response.data);
                        setAnimal(response.data);
                }
                catch (err) {
                        console.log(err);
                }
        }

        return (
                <>
<Container className="mb-3">
   <Container >
                    
     
   
                        <Row >
                               
                                {
                                        
                                animal.map((an) => {
                                        return (
                                                <Col lg={4} >
                                                        <Card border="primary" className="bg-light" style={{ width: '18rem',marginTop:"100px"  }} >
                                                        <Card.Header>{an.aname}</Card.Header>
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
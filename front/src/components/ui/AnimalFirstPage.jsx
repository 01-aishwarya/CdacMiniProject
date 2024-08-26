import axios from "axios";
import { useState, useEffect } from "react";
import { Card ,Container,Row,Col} from "react-bootstrap";
import { NavigationBar } from "../library/NavigationBar";
import { Carousel, Image} from "react-bootstrap";
import { Alert } from "react-bootstrap";

export function AnimalFirstPage() {
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
<Container className="mb-3 mt-5">
<Container>
          <Alert className="mt-5 d-flex justify-content-center text-blue" style={{backgroundColor:"white",border:"1px solid white",borderRadius:"20px "}}>
          <h2>One Help for Little Heart of our Society : Natures Good Creatures </h2></Alert>
         </Container>
   <Container >
                    
  
                        <Row >
                       
                        <Col lg={4}>
               <Card border="primary" style={ {width:"100%",margin:"20px", backgroundColor:"white "  }} >
               <Card.Img variant="top" style={ {width:"100%",height:"300px",padding:"40px"}} src="./rd.jpg" />
                                                        <Card.Body>
                                                                <Card.Title>Tommy</Card.Title>
                                                                <Card.Text>
                                                                <p>Municipality</p>
                                                                        <p>near sector 10, wadala bridge,sai krupa building ,near aarati xerox</p>
                                                                        <p>Injured</p>
                                                                        <p>2 dogs want some help , they have some allergy , plz provide help for them,have some skin related issues</p>
                                                                </Card.Text>

                                                        </Card.Body>
                                                </Card>

               </Col>

               
               <Col lg={4}>
               <Card border="primary" style={ {width:"100%",margin:"20px", backgroundColor:"white "  }} >
               <Card.Img variant="top" style={ {width:"100%",height:"300px",padding:"40px"}} src="./rd2.jpg" />
               <Card.Body>
                                                                <Card.Title>No Name</Card.Title>
                                                                <Card.Text>
                                                                <p>Municipality</p>
                                                                        <p>hanuman tekdi, near pooja apartment, ahmedpur, latur</p>
                                                                        <p>Injured</p>
                                                                        <p>want help for cow child, she is alone and hungry , plz provide home and some food for innocent ones</p>
                                                                </Card.Text>

                                                        </Card.Body>
                                                </Card>

               </Col>

               
               <Col lg={4}>
               <Card border="primary" style={ {width:"100%",margin:"20px", backgroundColor:"white"  }} >
               <Card.Img variant="top" style={ {width:"100%",height:"300px",padding:"40px"}} src="./rd3.jpg" />
               <Card.Body>
                                                                <Card.Title>Shakti</Card.Title>
                                                                <Card.Text>
                                                                <p>Municipality</p>
                                                                        <p>near 3 apartment, mg-complex juu gaon,vashi, navi mumbai</p>
                                                                        <p>Injured</p>
                                                                        <p>due to hevy rain, some animals got stucked here, want some help , food and shelter, if possible reach as early as poosible.</p>
                                                                </Card.Text>

                                                        </Card.Body>
                                                </Card>

               </Col>

               <Col lg={4}>
               <Card border="primary" style={ {width:"100%",margin:"20px", backgroundColor:"white "  }} >
               <Card.Img variant="top" style={ {width:"100%",height:"300px",padding:"40px"}} src="./rd7.jpg" />
               <Card.Body>
                                                                <Card.Title>Mumba</Card.Title>
                                                                <Card.Text>
                                                                <p>Municipality</p>
                                                                        <p>Near matunga, near road no 10, king circle ,behind vj cafe</p>
                                                                        <p>Injured</p>
                                                                        <p>one buffalow child is alone, i brought it to my home , plz provide help as sooon as posisble, i will take care till your response</p>
                                                                </Card.Text>

                                                        </Card.Body>
                                                </Card>

               </Col>


               <Col lg={4}>
               <Card border="primary" style={ {width:"100%",margin:"20px", backgroundColor:"white "  }} >
               <Card.Img variant="top" style={ {width:"100%",height:"300px",padding:"40px"}} src="./rd6.jpg" />
               <Card.Body>
                                                                <Card.Title>Puppy</Card.Title>
                                                                <Card.Text>
                                                                <p>Municipality</p>
                                                                        <p>Sector 12, near renuka mess, vashi , navi mumbai</p>
                                                                        <p>Injured</p>
                                                                        <p>one dog has some allergy , want help as sosn as poosible, plz provide it,and he is hungry from some times i guess, want some little help for him,for little heart from you  </p>
                                                                </Card.Text>

                                                        </Card.Body>
                                                </Card>

               </Col>


               <Col lg={4}>
               <Card border="primary" style={ {width:"100%",margin:"20px", backgroundColor:"white "  }} >
               <Card.Img variant="top" style={ {width:"100%",height:"300px",padding:"40px"}} src="./rd5.jpg" />
               <Card.Body>
                                                                <Card.Title>Mayur</Card.Title>
                                                                <Card.Text>
                                                                <p>Municipality</p>
                                                                        <p>Near mini sea shore, vashi , navi mumbai, sector 26,infront of seasone bill board</p>
                                                                        <p>Injured</p>
                                                                        <p>one dog is ill and want some help has some skin allegy i guess , plz provide hlep and plz come as possible as early</p>
                                                                </Card.Text>

                                                        </Card.Body>
                                                </Card>

               </Col>

              
               
               
                                
                        </Row>
                      </Container>
                      </Container>
                </>
        );
}
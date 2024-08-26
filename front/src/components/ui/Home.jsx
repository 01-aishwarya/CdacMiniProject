import { Carousel, Image,Container,Row,Col} from "react-bootstrap";
import {ViewAllAnimal} from "./ViewAllAnimal";
import { NavigationBar} from "../library/NavigationBar";
import { Footer } from "./Footer";
import {AnimalFirstPage} from "./AnimalFirstPage";

export function Home()
{
        return(
                <>
               
      <Container className="mb-3">
      
     
        <Row >
        <Col lg={12}>
        <Carousel>
      <Carousel.Item interval={1000} >
      <Image style={{width:"100%",height:"600px" ,marginTop:"20px"}} src="./4.jpg" />
      </Carousel.Item>
     
       <Carousel.Item interval={1000}>
      <Image style={{width:"100%",height:"600px" ,marginTop:"20px" }}   src="./2.jpg"/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Image style={{width:"100%",height:"600px" ,marginTop:"20px"}}   src="./5.jpg" />
      </Carousel.Item>
       <Carousel.Item interval={1000} >
      <Image style={{width:"100%",height:"600px" ,marginTop:"20px"}} src="./8.webp" />
      </Carousel.Item>
     
      
    </Carousel>
        </Col>
       
        </Row>
        <Row className="mb-3">
         <AnimalFirstPage/>
        </Row>
        <Row className="m-4">
          <Footer/>
        </Row>

      </Container>
                </>
        );
}
import { Container,Row,Col } from "react-bootstrap";

import { ViewAllAnimal } from "./ViewAllAnimal";
import { AdminNavbar } from "./AdminNavbar";
import { MunicipalityNavbar} from "./MunicipalityNavbar";
import { LinkContainer} from "react-router-bootstrap";
import { Nav,NavLink} from "react-bootstrap";
import { SeeQuery } from "./SeeQuery";



export function MunicipalityPage()
{
        return(<>
           <Container>
                <Row>
                <Container>
                <SeeQuery/>
               
               
               </Container>
                </Row>
           </Container>  
        </>)
}
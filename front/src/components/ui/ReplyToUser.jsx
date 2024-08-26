import axios from "axios";
import { useState, useEffect } from "react";
import { Card ,Container,Row,Col,Table} from "react-bootstrap";
import { NavigationBar } from "../library/NavigationBar";
import { AdminNavbar } from "./AdminNavbar";
import { AnimalRegistration } from "./AnimalRegistration";
import { useParams } from "react-router-dom";
import { Toast,ToastContainer } from "react-bootstrap";

export function ReplyToUser() {
        const [user, setUser] = useState([]);
        const [showToast, setShowToast] = useState(false);
        const p=useParams();

        useEffect(() => {

                fetchUser();
        }, []);

        const handleCloseToast = () => {
                setShowToast(false);
            }
            
       
        async function fetchUser() {
                try {
                        const response = await axios.get(`http://127.0.0.1:2400/muni/${p.username}`);
                        console.log(response.data);
                        if(response.data.length==0)
                                {
                                        setShowToast(true);
                                }
                                else{
                                        setUser(response.data);
                                }
                        
                }
                catch (err) {
                        console.log(err);
                }
        }

    

        return (
                <Container >
                       <Row>
                       
                        <Col lg={12} className="m-2 p-2">
                        <Table striped bordered hover className=" m-2" style={{border:"1px solid white",borderRadius:"20px "}}>
                     
                     <thead>
                          <tr>
                          
                            <th>Username</th>
                            <th>Status</th>
                            <th>Message</th>
                            
                  
                          </tr>
                        </thead>        
                                             
                                                              
                                                                
                        <tbody>
                        {
                                user.map((an) => {
                                        return (
                                               
                                            
    
        <tr>
       
                <td style={{backgroundColor:"#EBF5FB"}}>{an.username}</td>
                <td style={{backgroundColor:"#EBF5FB"}}>{an.status}</td>
              
                <td style={{backgroundColor:"#EBF5FB"}}>{an.msg}</td>
               
        </tr>
                                  
                                                        
                                        );
                                })
                        }
                        </tbody>
                                                                
                                                                          
                                                   
                                         
                                          </Table>
                        </Col>
                       </Row>

                             <ToastContainer position="top-end">
                <Toast bg="warning" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">Staus Hasn't Checked Yet</Toast.Body>
                </Toast>
            </ToastContainer>
         </Container>                   
                
                    
     
     
                      
                 
        );
}
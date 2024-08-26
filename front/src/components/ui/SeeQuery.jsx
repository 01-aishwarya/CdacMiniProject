import axios from "axios";
import { useState, useEffect } from "react";
import { Card ,Container,Row,Col,Table} from "react-bootstrap";
import { NavigationBar } from "../library/NavigationBar";
import { AdminNavbar } from "./AdminNavbar";
import {ReplyMuni} from "./ReplyMuni";
import { MunicipalityNavbar } from "./MunicipalityNavbar";
import { useNavigate } from "react-router-dom";
import { Button} from "react-bootstrap";


export function SeeQuery() {
        const [user, setUser] = useState([]);
       
        const [n, setN] = useState('');

        const navigate=useNavigate();

        useEffect(() => {
                fetchUser();
        }, []);

     
       
                

        async function fetchUser() {
                try {
                        const response = await axios.get("http://127.0.0.1:2400/animal");
                        console.log(response.data);
                        setUser(response.data);
                }
                catch (err) {
                        console.log(err);
                }
        }

        return (
                <>
<Container >
                <Row  className="d-flex justify-content-center">
                       

                        <Col lg={12} style={{marginTop:"20px"}}>
                        <Container className="mb-3">
   <Container >
                    
     
   <Table striped bordered hover style={{backgroundColor:"#AED6F1",marginTop:"20px"}}>
                     
   <thead>
        <tr>
        <th>AnimalName</th>
        <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
         
          <th>Location</th>
          <th>Message</th>
          <th>Situation</th>
          <th>Organization</th> 
          <th>Action</th> 
        </tr>
      </thead>   
                                {
                                user.map((an) => {
                                        return (
                                               
                                            
                                              
      <tbody>
        <tr>
        <td style={{backgroundColor:"#EBF5FB"}}>{an.aname}</td>
        <td style={{backgroundColor:"#EBF5FB"}}>{an.username}</td>
                <td style={{backgroundColor:"#EBF5FB"}}>{an.email}</td>
                <td style={{backgroundColor:"#EBF5FB"}}>{an.phone}</td>
              
                <td style={{backgroundColor:"#EBF5FB"}}>{an.location}</td>
                <td style={{backgroundColor:"#EBF5FB"}}>{an.msg}</td>
                <td style={{backgroundColor:"#EBF5FB"}}>{an.situation}</td>
                <td style={{backgroundColor:"#EBF5FB"}}>{an.org}</td>
                <td style={{backgroundColor:"#EBF5FB"}}><Button 
                className="bg-info"
                onClick={()=>{
                         navigate(`/muni-form/${an.username}`);
                }} >Reply</Button></td>
        </tr>
      </tbody>
                                              
                                                        
                                        );
                                })
                        }
                        </Table>
                               
                      
                      </Container>
                      </Container>
                        </Col>
                </Row>
           </Container> 
                </>
        );
}
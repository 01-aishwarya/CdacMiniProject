import axios from "axios";
import { useState, useEffect } from "react";
import { Card ,Container,Row,Col,Table} from "react-bootstrap";
import { NavigationBar } from "../library/NavigationBar";
import { AdminNavbar } from "./AdminNavbar";
import { Button} from "react-bootstrap";
import { Toast,ToastContainer } from "react-bootstrap";



export function GetAllUsers() {
        const [user, setUser] = useState([]);
        const [showToast, setShowToast] = useState(false);
        const [n, setN] = useState(' ');

        useEffect(() => {
                fetchUser();
        }, []);


        
const handleCloseToast = () => {
        setShowToast(false);
      }
        const deleteUser=()=>
                {
                        const y=prompt("do u want to delete type yes else no");
                        console.log(y);
                        if(y=="yes")
                                {
                                        fetchUserByName() ;
                                        
                                }
                               
                }
        async function fetchUser() {
                try {
                        const response = await axios.get("http://127.0.0.1:2400/users");
                        console.log(response.data);
                        setUser(response.data);
                }
                catch (err) {
                        console.log(err);
                }
        }

        async function fetchUserByName() {
                try {
                        const response = await axios.delete(`http://127.0.0.1:2400/users/${n}`);
                        console.log(response.data);
                        if(response.status==200)
                                {
                                        setShowToast(true);
                                        fetchUser();
                                }
                     
                }
                catch (err) {
                        console.log(err);
                }
        }

        return (
                <>
<Container>
                <Row>
                        <Col lg={3} style={{backgroundColor:"#AED6F1",marginTop:"20px",paddingTop:"80px",border:"1px solid white",borderRadius:"20px "}}>
                        <AdminNavbar/> 
                       
                        </Col>

                        <Col lg={9} style={{backgroundColor:"#AED6F1",marginTop:"20px",border:"1px solid white",borderRadius:"20px "}}>
                        <Container className="mb-3">
   <Container >
                    
     
   <Table striped bordered hover style={{backgroundColor:"#AED6F1",marginTop:"20px"}}>
                     
   <thead>
        <tr>
        
          <th>Email</th>
          <th>Username</th>
          <th>Phone</th>
          <th>Category</th>
          <th>Action</th>

        </tr>
      </thead>   
                                {
                                user.map((an) => {
                                        return (
                                               
                                            
                                              
      <tbody >
        <tr >
                <td style={{backgroundColor:"#EBF5FB"}}>{an.email}</td>
                <td style={{backgroundColor:"#EBF5FB"}}>{an.username}</td>
                <td style={{backgroundColor:"#EBF5FB"}}>{an.phone}</td>
                <td style={{backgroundColor:"#EBF5FB"}}>{an.category}</td>
                <td style={{backgroundColor:"#EBF5FB"}}><Button 
                 className="bg-danger"
                onClick={()=>{
                        setN(an.username);
                deleteUser();
                }} >Delete</Button></td>
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

                <ToastContainer position="top-end">
                <Toast bg="info" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">User Deleted</Toast.Body>
                </Toast>
            </ToastContainer>
           </Container> 
                </>
        );
}
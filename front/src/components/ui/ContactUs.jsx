import { Form,Button,Container ,Row,Col,Alert} from "react-bootstrap";
import { useState } from "react";
import axios
 from "axios";
 import 'react-toastify/dist/ReactToastify.css';
import { Toast,ToastContainer } from "react-bootstrap";
import { Navbar ,Nav,NavLink,NavbarBrandn,NavbarCollapse} from "react-bootstrap";
import { LinkContainer} from "react-router-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export const ContactUs = () => {

const [user,setUser]=useState({username:'',email:'',phone:'',feedback:''});
const [showToast, setShowToast] = useState(false);


  const handleSubmit=(e)=>{
    e.preventDefault();
    saveUser();
  }

  const handleCloseToast = () => {
    setShowToast(false);
}



  async function saveUser()
  {
    try{
      const res=await axios.post("http://127.0.0.1:2400/contacts",user);
      console.log(res);
      if(res.status==200)
        {
          setShowToast(true);
        }
        
    }
    catch(err)
    {
      console.log(err);
    }
  }

  const handleForm=(e)=>{

    setUser({
      ...user,
      [e.target.name]:e.target.value 
    });
  }

  return (
  
         <Container >


         <Container >
          <Alert className="mt-2 d-flex justify-content-center text-white" style={{backgroundColor:"#AED6F1",border:"1px solid white",borderRadius:"20px "}}>
          <h1>Contact Us Here</h1></Alert>
         </Container>

         <Container className=" d-flex justify-content-center"   >
         <Row >
                <Col  style={{backgroundColor:"#AED6F1",border:"1px solid white",borderRadius:"20px "}}>
                <Form onSubmit={handleSubmit}  style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleForm}  placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" onChange={handleForm} placeholder="Enter username" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" name="phone" onChange={handleForm} placeholder="Enter phone" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Feedback</Form.Label>
        <Form.Control type="tel" name="feedback" onChange={handleForm} placeholder="Enter Feedback" required />
      </Form.Group>
     

      <Row className=" d-flex justify-content-center">
     <Col lg={6} className=" d-flex justify-content-center">
     <Button style={{backgroundColor:"#82E0AA "}} type="submit" >
        Contact Us
      </Button>
     </Col>
    
     </Row>
    <Row  className="mt-5">
    <Alert  style={{backgroundColor:"#AED6F1"}}>
     <Row  >
       
        <Col lg={3}>
        <FaInstagram /> 
        </Col>
        <Col lg={2}>
        <CiFacebook />
        </Col>
        <Col lg={3}>
        <SiGmail />
        </Col>
        <Col lg={2}>
        <FaYoutube />
        </Col>
        <Col lg={2}>
        <FaXTwitter />
        </Col>

      
     </Row>
     </Alert>
    </Row>
    </Form>
                </Col>
         </Row>
         </Container>

         <ToastContainer position="top-end">
                <Toast bg="success" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">Contact Saved </Toast.Body>
                </Toast>
            </ToastContainer>

          
         </Container>
   
  );
};
import { Form,Button,Container ,Row,Col,Alert} from "react-bootstrap";
import { useState } from "react";
import axios
 from "axios";
 import 'react-toastify/dist/ReactToastify.css';
import { Toast,ToastContainer } from "react-bootstrap";
import { Navbar ,Nav,NavLink,NavbarBrandn,NavbarCollapse} from "react-bootstrap";
import { LinkContainer} from "react-router-bootstrap";

export const SignUp = () => {

const [user,setUser]=useState({email:'',username:'',password:'',phone:'',category:''});
const [showToast, setShowToast] = useState(false);
const [showToastTwo, setShowToastTwo] = useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    saveUser();
  }

  const handleCloseToast = () => {
    setShowToast(false);
}

const handleCloseToastTwo = () => {
  setShowToastTwo(false);
}

  async function saveUser()
  {
    try{
      const res=await axios.post("http://127.0.0.1:2400/users",user);
      console.log(res);
      if(res.status==200)
        {
          setShowToast(true);
        }
        
    }
    catch(err)
    {
      setShowToastTwo(true);
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


         <Container>
          <Alert className="mt-2 d-flex justify-content-center text-white" style={{backgroundColor:"#AED6F1",border:"1px solid white",borderRadius:"20px "}}>
          <h1>Welcome to User Sign Up</h1></Alert>
         </Container>

         <Container className=" d-flex justify-content-center"  >
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
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name="password" onChange={handleForm} placeholder="Enter password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" name="phone" onChange={handleForm} placeholder="Enter phone" required />
      </Form.Group>

     
      <Form.Group className="mb-3"  controlId="formBasicCheckbox" >
        <Form.Check type="radio" name="category" value="user" onClick={handleForm} label="user" required />
        <Form.Check type="radio" name="category" value="admin" onClick={handleForm} label="admin"  required/>
        <Form.Check type="radio" name="category" value="municipality"  onClick={handleForm}  label="municipality" required />
        <Form.Check type="radio" name="category" value="organization" onClick={handleForm}  label="organization" required/>
      </Form.Group>

      <Row>
     <Col lg={6} className=" d-flex justify-content-center">
     <Button style={{backgroundColor:"#82E0AA "}} type="submit" >
        Sign Up
      </Button>
     </Col>
     <Col lg={6} className=" d-flex justify-content-center">
    
                <LinkContainer to="/log-in"> 
                <NavLink className="text-success" ><Button style={{backgroundColor:"#82E0AA "}}>Log In</Button></NavLink>
                
                </LinkContainer>

               
     </Col>
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
                    <Toast.Body className="text-white">User registered</Toast.Body>
                </Toast>
            </ToastContainer>

            <ToastContainer position="top-end">
                <Toast bg="danger" onClose={handleCloseToastTwo} show={showToastTwo} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">User NOT registered</Toast.Body>
                </Toast>
            </ToastContainer>
         </Container>
   
  );
};
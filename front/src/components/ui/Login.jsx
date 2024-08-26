import { Form,Button,Container ,Row,Col,Alert} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toast,ToastContainer } from "react-bootstrap";
import { Navbar ,Nav,NavLink,NavbarBrandn,NavbarCollapse} from "react-bootstrap";
import { LinkContainer} from "react-router-bootstrap";


export const Login = () => {

const [user,setUser]=useState({username:'',password:''});
const [showToast, setShowToast] = useState(false);

const navigate=useNavigate();

  const handleSubmit=(e)=>{
        e.preventDefault();
   chkUser();
  }

  const handleCloseToast = () => {
    setShowToast(false);
}


  async function chkUser()
  {
    try{
      const res=await axios.post(`http://127.0.0.1:2400/login`,user);
      console.log(res.data);
     
      if(res.status===200 && res.data[0].category==="user")
        {
                navigate(`/animal-registration/${user.username}`);
        }
        else  if(res.status===200 && res.data[0].category==="admin")
        {
          navigate("/admin-page");
        }
        else  if(res.status===200 && res.data[0].category==="municipality")
          {
            navigate("/municipality-page");
          }
          else
          {
            setShowToast(true);
            console.log("else");
            
          }
    }
    catch(err)
    {
      console.log(err);
      setShowToast(true);
    }
  }

  const handleForm=(e)=>{
e.preventDefault();
    setUser({
      ...user,
      [e.target.name]:e.target.value
    });
  }

  return (
  
         <Container >
          <Container>
          <Alert className="mt-5 d-flex justify-content-center text-white" style={{backgroundColor:"#AED6F1",border:"1px solid white",borderRadius:"20px "}}>
          <h2>Welcome Log In </h2></Alert>
         </Container>

         <Container  >
         <Row className=" d-flex justify-content-center ">
                <Col lg={6} className="mt-5 " style={{backgroundColor:"#AED6F1",border:"1px solid white",borderRadius:"20px "}}>
                <Form onSubmit={handleSubmit}  >
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" onChange={handleForm} placeholder="Enter username" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name="password" onChange={handleForm} placeholder="Enter password" required/>
      </Form.Group>
      

     
      <Row>
      <Col lg={6} className=" d-flex justify-content-center">
     <Button style={{backgroundColor:"#82E0AA "}} type="submit" >
       Log In
      </Button>
     </Col>

     <Col lg={6} className=" d-flex justify-content-center">
    
    <LinkContainer to="/sign-up"> 
    <NavLink className="text-success" ><Button style={{backgroundColor:"#82E0AA "}}>Sign Up</Button></NavLink>
    
    </LinkContainer>

   
</Col>
      </Row>
    </Form>
                </Col>
         </Row>
         </Container>
         <ToastContainer position="top-end">
                <Toast bg="danger" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">Something is wrong in username or password</Toast.Body>
                </Toast>
            </ToastContainer>
         </Container>
   
  );
};
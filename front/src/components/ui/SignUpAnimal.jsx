import { Form,Button,Container ,Row,Col,Alert} from "react-bootstrap";
import { useState } from "react";
import axios
 from "axios";
import { useNavigate } from "react-router-dom";
import { Toast,ToastContainer } from "react-bootstrap";
import { LinkContainer} from "react-router-bootstrap";
import { Nav,NavLink} from "react-bootstrap";


export const SignUpAnimal = () => {

const [animal,setAnimal]=useState({email:'',username:'',phone:'',file:'',location:'',msg:'',situation:'',aname:'',org:''});
const [user,setUser]=useState('');

const [showToast, setShowToast] = useState(false);
const formData=new FormData();

  const handleSubmit=(e)=>{
    e.preventDefault();
    saveAnimal();
  }

  const navigate=useNavigate();

  const handleCloseToast = () => {
    setShowToast(false);
}





  async function saveAnimal()
  {
    try{
  

      const res=await axios.post("http://127.0.0.1:2400/animal",animal);
      console.log(res.data);
    
      navigate(`view-animal-from-database/${animal.aname}`);
    }
    catch(err)
    {
      setShowToast(true);
      console.log(err);
    }
  }

  const getUser=(e)=>{
setUser(e.target.value);
  }
  const handleForm=(e)=>{

    setAnimal({
      ...animal,
      [e.target.name]:e.target.value
    });
  }

 

  return (
  
         <Container style={{backgroundColor:"#AED6F1"}} >
         <Container style={{backgroundColor:"#AED6F1"}}>
          <Alert className="mt-5 d-flex justify-content-center text-white" style={{backgroundColor:"#AED6F1",border:"1px solid white",borderRadius:"20px "}}>
         <h2> Welcome to Animal Registration</h2></Alert>
         </Container>

         <Container  style={{backgroundColor:"#AED6F1"}}>
         <Row >
         
         <Form onSubmit={handleSubmit}  >
         <Row >
         <Col  lg={4} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleForm}  placeholder="Enter email" required/>
      </Form.Group>
         </Col>
         <Col lg={4}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" onChange={handleForm} onKeyUp={getUser} placeholder="Enter username" required/>
      </Form.Group>
         </Col>
         <Col lg={4}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Animal Name</Form.Label>
        <Form.Control type="text" name="aname" onChange={handleForm}  placeholder="Enter Animal Name" required/>
      </Form.Group>
         </Col>
         </Row>
         <Row>
         <Col lg={6}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" name="phone" onChange={handleForm}  placeholder="Enter phone" required/>
      </Form.Group>
         </Col>
         <Col lg={6} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" name="location" onChange={handleForm} placeholder="Enter location" required />
      </Form.Group>
         </Col>
         </Row>
         <Row>
         <Col lg={6} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Message To Us</Form.Label>
        <Form.Control type="textarea" name="msg" onChange={handleForm}  placeholder="Type Message here..."  required/>
      </Form.Group>
         </Col>
         <Col lg={6} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Picture</Form.Label>
        <Form.Control type="file" name="file" onChange={handleForm} placeholder="Upload img"  />
      </Form.Group>
         </Col>
         </Row>
         <Row>
         <Col lg={6} >
         <Form.Group className="mb-3"  controlId="formBasicCheckbox">
        <Form.Check type="radio" name="situation" value="Injured" onClick={handleForm}  label="Injured"  required/>
        <Form.Check type="radio" name="situation" value="No Shelter" onClick={handleForm}  label="No Shelter"  required/>
        <Form.Check type="radio" name="situation" value="Pregnant"  onClick={handleForm}  label="Pregnant" required />
        <Form.Check type="radio" name="situation" value="Alone" onClick={handleForm}   label="Alone" required/>
      </Form.Group>
         </Col>
         <Col lg={6} >
         <Form.Group className="mb-3"  controlId="formBasicCheckbox">
        <Form.Check  type="radio" name="org" value="Municipality" onClick={handleForm} label="Municipality"  required/>
        <Form.Check type="radio" name="org" value="Doctor" onClick={handleForm}  label="Doctor" required/>
        <Form.Check type="radio" name="org" value="Adoption"  onClick={handleForm}   label="Adoption" required/>
        <Form.Check type="radio" name="org" value="organization" onClick={handleForm} label="organization" required  />
      </Form.Group>
         </Col>
         </Row>
         <Row>
        <Col  className="d-flex justify-content-center">
        <Button style={{backgroundColor:"#82E0AA "}} type="submit">
        Register Animal
      </Button>
        </Col>
        <Col  className=" d-flex justify-content-center">
    
    <LinkContainer to="/log-in"> 
    <NavLink className="text-success" ><Button style={{backgroundColor:"#82E0AA "}}>Log Out</Button></NavLink>
    
    </LinkContainer>

   
</Col>
         </Row>
         
                </Form>
            
         </Row>
         </Container>

         <ToastContainer position="top-end">
                <Toast bg="danger" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">there is problem in database</Toast.Body>
                </Toast>
            </ToastContainer>
         </Container>
   
  );
};
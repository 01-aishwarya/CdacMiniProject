import { Form,Button,Container ,Row,Col,Alert} from "react-bootstrap";
import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Toast,ToastContainer } from "react-bootstrap";




export const ReplyMuni = () => {
const [user,setUser]=useState({username:'',status:'',msg:''});
const [showToast, setShowToast] = useState(false);

const p=useParams();

useEffect(()=>{
user.username=p.username;
},[]);

const handleCloseToast = () => {
  setShowToast(false);
}


  const handleSubmit=(e)=>{
    e.preventDefault();
    saveUser();
  }

  async function saveUser()
  {
    try{
      const res=await axios.post("http://127.0.0.1:2400/muni",user);
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
         <Container>
          <Alert className="mt-5 d-flex justify-content-center text-white" style={{backgroundColor:"#AED6F1"}}>
          <h1>Welcome to Municipality Page</h1></Alert>
         </Container>

         <Container  >
         <Row className="d-flex justify-content-center" >
                <Col lg={5} style={{backgroundColor:"#AED6F1"}}>
                <Form onSubmit={handleSubmit}  >
     
   
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" name="msg" onChange={handleForm} placeholder="Enter msg" required/>
      </Form.Group>

     
      <Form.Group className="mb-3"  controlId="formBasicCheckbox">
        <Form.Check type="radio" name="status" value="pending" onClick={handleForm} label="pending" required />
        <Form.Check type="radio" name="status" value="none" onClick={handleForm} label="none" required />
        <Form.Check type="radio" name="status" value="successful"  onClick={handleForm}  label="successful" required />
        </Form.Group>
     <Row >
     <Col className="d-flex justify-content-center">
     <Button variant="success" type="submit">
        Reply User
      </Button>
     </Col>
     
     </Row>
    </Form>
                </Col>
         </Row>
         </Container>

         <ToastContainer position="top-end">
                <Toast bg="info" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">Replied To User</Toast.Body>
                </Toast>
            </ToastContainer>
         </Container>
   
  );
};
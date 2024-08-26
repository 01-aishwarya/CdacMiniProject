import { Form,Button,Container ,Row,Col,Alert} from "react-bootstrap";
import { useEffect, useState } from "react";
import axios
 from "axios";
 import { useParams } from "react-router-dom";
 import { Toast,ToastContainer } from "react-bootstrap";



export const EditAnimal = () => {



const [animal,setAnimal]=useState({email:'',username:'',phone:'',location:'',msg:'',pic:'',situation:'',org:'',aname:''});
const [showToast, setShowToast] = useState(false);
const [showToastTwo, setShowToastTwo] = useState(false);
const p=useParams();

useEffect(()=>{
  getUser();
},[])


const handleCloseToast = () => {
  setShowToast(false);
}
const handleCloseToastTwo = () => {
  setShowToastTwo(false);
}


  const handleSubmit=(e)=>{
    e.preventDefault();
    saveAnimal();
  }

  async function saveAnimal()
  {
    try{
      const res=await axios.put(`http://127.0.0.1:2400/animal/${animal.aname}`,animal);
      console.log(res);
      setShowToast(true);
    }
    catch(err)
    {
      console.log(err);
      setShowToastTwo(true);
    }
  }

  async function getUser(){
    try{
      const res=await axios.get(`http://127.0.0.1:2400/animal/${p.aname}`);
      setAnimal(res.data[0]);
    }
    catch(err)
    {
      console.log(err);
    }
  }
  const handleForm=(e)=>{

    setAnimal({
      ...animal,
      [e.target.name]:e.target.value
    });
  }

  return (
  
         <Container className="mt-5" style={{backgroundColor:"#AED6F1",width:"900px",border:"1px solid white",borderRadius:"20px "}}>
         <Container style={{backgroundColor:"#AED6F1"}}>
          <Alert className="mt-5 d-flex justify-content-center text-white" style={{backgroundColor:"#AED6F1"}}>
            <h2>Welcome to Animal Registration</h2>
          </Alert>
         </Container>

         <Container  style={{backgroundColor:"#AED6F1"}}>
         <Row >
         
         <Form onSubmit={handleSubmit}  >
         <Row>
         <Col lg={4} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleForm}  placeholder={animal.email} />
      </Form.Group>
         </Col>
         <Col lg={4} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" onChange={handleForm} onKeyUp={getUser} placeholder={animal.username} />
      </Form.Group>
         </Col>
         <Col lg={4} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Animal Name</Form.Label>
        <Form.Control type="text" name="aname" onChange={handleForm} onKeyUp={getUser} placeholder={animal.aname} />
      </Form.Group>
         </Col>
         </Row>
         <Row>
         <Col lg={6} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" name="phone" onChange={handleForm}  placeholder={animal.phone} />
      </Form.Group>
         </Col>
         <Col lg={6} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" name="location" onChange={handleForm} placeholder={animal.location} />
      </Form.Group>
         </Col>
         </Row>
         <Row>
         <Col lg={6} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Message To Us</Form.Label>
        <Form.Control type="textarea" name="msg" onChange={handleForm}  placeholder={animal.msg} />
      </Form.Group>
         </Col>
         <Col lg={6} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Picture</Form.Label>
        <Form.Control type="file" name="pic" onChange={handleForm} placeholder={animal.pic} />
      </Form.Group>
         </Col>
         </Row>
         <Row>
         <Col lg={6} >
         <Form.Group className="mb-3"  controlId="formBasicCheckbox">
        <Form.Check type="radio" name="situation" value="Injured" onClick={handleForm}  label="Injured" required/>
        <Form.Check type="radio" name="situation" value="No Shelter" onClick={handleForm}  label="No Shelter" required />
        <Form.Check type="radio" name="situation" value="Pregnant"  onClick={handleForm}  label="Pregnant"  required/>
        <Form.Check type="radio" name="situation" value="Alone" onClick={handleForm}   label="Alone" required/>
      </Form.Group>
         </Col>
         <Col lg={6} >
         <Form.Group className="mb-3"  controlId="formBasicCheckbox">
        <Form.Check  type="radio" name="org" value="Municipality" onClick={handleForm} label="Municipality" required  />
        <Form.Check type="radio" name="org" value="Doctor" onClick={handleForm}  label="Doctor" required/>
        <Form.Check type="radio" name="org" value="Adoption"  onClick={handleForm}   label="Adoption" required/>
        <Form.Check type="radio" name="org" value="organization" onClick={handleForm} label="organization"  required/>
      </Form.Group>
         </Col>
         </Row>
         <Row>
        <Col  className="d-flex justify-content-center" style={{backgroundColor:"#AED6F1"}}>
        <Button variant="warning" type="submit">
        Edit Animal
      </Button>
        </Col>
         </Row>
         
                </Form>
            
         </Row>
         </Container>
         <ToastContainer position="top-end">
                <Toast bg="warning" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">Animal Edited</Toast.Body>
                </Toast>
            </ToastContainer>
            <ToastContainer position="top-end">
                <Toast bg="danger" onClose={handleCloseToastTwo} show={showToastTwo} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">Problem in editing animal</Toast.Body>
                </Toast>
            </ToastContainer>
         </Container>
   
  );
};
import { Form,Button,Container ,Row,Col,Alert} from "react-bootstrap";
import { useState } from "react";
import axios
 from "axios";
export const MuniForm = () => {

const [user,setUser]=useState({email:'',username:'',password:'',phone:'',category:''});

  const handleSubmit=(e)=>{
    e.preventDefault();
    saveUser();
  }

  async function saveUser()
  {
    try{
      const res=await axios.post("http://127.0.0.1:2400/users",user);
      console.log(res);
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
          <Alert className="mt-5 d-flex justify-content-center" style={{backgroundColor:"#ECF0F1"}}>Welcom to User Sign Up</Alert>
         </Container>

         <Container  >
         <Row >
                <Col lg={6} style={{backgroundColor:"#ECF0F1"}}>
                <Form onSubmit={handleSubmit}  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleForm}  placeholder="Enter email"   required/>
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
        <Form.Control type="tel" name="phone" onChange={handleForm} placeholder="Enter phone" required/>
      </Form.Group>

     
      <Form.Group className="mb-3"  controlId="formBasicCheckbox">
        <Form.Check type="radio" name="category" value="user" onClick={handleForm} label="user" required/>
        <Form.Check type="radio" name="category" value="admin" onClick={handleForm} label="admin" required/>
        <Form.Check type="radio" name="category" value="municipality"  onClick={handleForm}  label="municipality" required/>
        <Form.Check type="radio" name="category" value="organization" onClick={handleForm}  label="organization" required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
                </Col>
         </Row>
         </Container>
         </Container>
   
  );
};
import { Form,Button,Container ,Row,Col,Alert} from "react-bootstrap";
import { useState ,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ViewAnimal } from "./ViewAnimal";
import { Card } from "react-bootstrap";
import { LinkContainer} from "react-router-bootstrap";
import { Nav,NavLink} from "react-bootstrap";
import { Toast,ToastContainer } from "react-bootstrap";


export const ViewAnimalFromDatabase = () => {
const [animal,setAnimal]=useState({});
const [showToast, setShowToast] = useState(false);
const [aname,setAname]=useState(' ');

const p=useParams();
useEffect(()=>{
  console.log(p);
  chkUser();
});
const navigate=useNavigate();


const handleCloseToast = () => {
  setShowToast(false);
}
  async function chkUser()
  {
    try{
      const res=await axios.get(`http://127.0.0.1:2400/animal/${p.aname}`);
      console.log(res.data);

      if(res.status==200 && res.data[0].aname==p.aname)
        {
                setAnimal(res.data[0]);
              
        }
        else{
          setAnimal({});
        }
    }
    catch(err)
    {
      console.log(err);
    }
  }


  function deleteData()
  {
    const y=prompt("do u want to delete type yes else no");
    console.log(y);
    if(y==="yes")
            {
                    fetchUserByName() ;
                    setShowToast(true);
                   chkUser();
            }
  }

  async function fetchUserByName() {
    try {
            const response = await axios.delete(`http://127.0.0.1:2400/animal/${aname}`);
            console.log(response.data);
            chkUser();
    }
    catch (err) {
            console.log(err);
    }
}


  return (
  <>

<Container  >
<Container style={{backgroundColor:"#AED6F1" }}>
          <Alert className="mt-5 d-flex justify-content-center text-white" style={{backgroundColor:"#AED6F1"}}>
         <h2> Welcome to Animal Page</h2> 
         
        
         <Col  className=" d-flex justify-content-center">
    
    <LinkContainer to="/log-in"> 
    <NavLink className="text-success" ><Button style={{backgroundColor:"#82E0AA "}}>Log Out</Button></NavLink>
    
    </LinkContainer>

   
</Col>
 </Alert>
         </Container>

   <Container>
   <Row className="d-flex justify-content-center"> 
   
    <Card className="bg-light mb-5" style={{ width: '18rem',marginTop:"100px" ,border:"1px solid blue",borderRadius:"20px "}}>
                                                                <Card.Body >
                                                                <Card.Header>{animal.aname}</Card.Header>
                                                                        <Card.Title>{animal.org}</Card.Title>
                                                                        <Card.Text>
                                                                                
                                                                                <p>{animal.location}</p>
                                                                                <p>{animal.situation}</p>
                                                                                <p>{animal.msg}</p>
                                                                                <p><Button
                                                                                className="bg-warning"
                                                                                onClick={()=>{
               navigate(`edit-animal-query/${animal.aname}`);
                }}
                >Edit</Button></p>
                                                                               <p> <Button 
                                                                                className="bg-danger"
                                                                                onClick={()=>{
              setAname(animal.aname);
              deleteData();
                }} >Delete</Button></p>
                   
                                                                        </Card.Text>

                                                                </Card.Body>
                                                        </Card>
   
   
    </Row>
   </Container>
     
          
               
               
               
   <ToastContainer position="top-end">
                <Toast bg="info" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">Animal Deleted</Toast.Body>
                </Toast>
            </ToastContainer>
         
         </Container>
         
  </>
      
         
   
  );
};
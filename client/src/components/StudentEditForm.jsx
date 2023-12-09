import Container from "react-bootstrap/esm/Container";
import { Header } from "./Header";
import { Form, Col, Row ,Button, Alert} from "react-bootstrap"; // Import Form from react-bootstrap
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchStudentByRoll, updateStudent } from "../services/userApis";


export function StudentEditForm() {
    const params=useParams();
   let[formData,setFormdata] =useState({roll:"",name:"",marks:"",gender:""});
  
   const [isSubmitted,setIsSubmitted]=useState(false);

    const populateStudentState=async()=>{
        try {
            const res=await fetchStudentByRoll(params.roll);
            
            console.log(res.student,"DGDGGDGG");
            setFormdata(res.student);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        console.log(params.roll,"PAPAP")
        populateStudentState();
    },[])

   const  handleChange=(e)=>{
    setFormdata({...formData,[e.target.name]:e.target.value})
   }

   const handleSubmit=async(e)=>{
    e.preventDefault();
    
    try {
        const res=updateStudent(formData,params.roll);
        console.log(res.data);
    } catch (error) {
      console.log(error);
    }
   }

  return (
    <Container>
      <Header text="Update Student Here..."></Header>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Roll</Form.Label>
        <Form.Control type="text" placeholder="Enter Roll" name="roll"  value={formData.roll} onChange={handleChange}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name="name" value={formData.name} onChange={handleChange}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Marks</Form.Label>
        <Form.Control type="text" placeholder="Enter Marks" name="marks" value={formData.marks} onChange={handleChange}/>
      </Form.Group>
      <Form.Check
            
            type="radio"
            label="Male"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={formData.gender=="male"? true:false}
            
          />
          <Form.Check
            
            type="radio"
            label="Female"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={formData.gender=="female"? true:false}
          />
      <Button variant="primary" type="submit" >
        Update
      </Button>
    </Form>
    <Row className="mt-3">
      <Col lg={4}>
        {isSubmitted?<Alert variant="success" >Student Upadet</Alert>:null}
      </Col>
    </Row>
    </Container>
  );
}

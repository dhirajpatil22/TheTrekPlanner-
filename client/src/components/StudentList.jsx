import Container from "react-bootstrap/esm/Container";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { deleteStudent, fetchStudents } from "../services/userApis";
import { Button, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function StudentList() {
  let [students, setStudents] = useState([]);
  let [showDialog,setShowDialog]=useState(false);
  let[selectedRoll,setSelectedRoll]=useState("");
  const navigate=useNavigate()
  function openModalDialog(){
    setShowDialog(true);
  }
  function closeModalDialog(){
    setShowDialog(false);
  }
  async function populateStudentState() {
    try {
      const data = await fetchStudents();

      setStudents(data.students);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    populateStudentState();
  }, []);
  const handleDeleteClick = async () => {
    try {
      await deleteStudent(selectedRoll);
      closeModalDialog();
      //get latest data
      await populateStudentState();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <Container>
      <Header text="List of all the studends is displayed ..."></Header>
      {students.length != 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Roll</th>
              <th>Name</th>
              <th>Marks</th>
              <th>gender</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => {
              return (
                <tr>
                  <td>{s.roll}</td>
                  <td>{s.name}</td>
                  <td>{s.marks}</td>
                  <td>{s.gender}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={()=>{
                        openModalDialog();
                        setSelectedRoll(s.roll);
                      }
                       
                      }
                    >
                      Delete
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="primary" onClick={()=>{
                      
                      navigate(`/edit/${s.roll}`);
                    }}>Edit</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Table mt={1}>        <p>No students found!</p></Table>
      )}
      <Modal show={showDialog} onHide={closeModalDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Delet confirmed?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This will delet the user permannety!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={()=>{
            handleDeleteClick()
          }}>
            yes
          </Button>
          <Button variant="danger" onClick={closeModalDialog}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

// import { Alert, Container } from "react-bootstrap";

// export function AboutUs(){
//     return(
//         <Container className="mt-5">
//             <Alert variant="success">
//                 <h4> This is About us Page</h4>
//             </Alert>

//         </Container>
//     )
// }

import { Alert, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export function AboutUs() {
  return (
    <CardGroup>
      <Card border="warning" style={{ width: "180rem" }}>
        <Card.Img variant="top" src="images/d1.jpeg" />
        <Card.Body>
          <Card.Title>Dhiraj Patil</Card.Title>
          <Card.Text>
            <b>Email:</b>patildhiraj0008@gmail.com<br></br>
            <b>PhoneNo:-</b>7083065066
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">GameChangers</small>
        </Card.Footer>
      </Card>
      <br />

      <Card border="warning" style={{ width: "180rem" }}>
        <Card.Img variant="top" src="images/d2.jpeg" />
        <Card.Body>
          <Card.Title>Vedantika Patil</Card.Title>
          <Card.Text>
            <b>Email:</b>vedantika0801@gmail.com<br></br>
            <b>PhoneNo:-</b>9022562234
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">GameChangers</small>
        </Card.Footer>
      </Card>
      <Card border="warning" style={{ width: "180rem" }}>
        <Card.Img variant="top" src="images/d3.jpeg" />
        <Card.Body>
          <Card.Title>Yash Kamble</Card.Title>
          <Card.Text>
            <b>Email:</b> yashkamble772@gmail.com<br></br>
            <b>PhoneNo:-</b> 8691869157
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">GameChangers</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

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
import "./about.css";
export function AboutUs() {
  const cardStyle = { width: "18rem", height: "auto" }; // Add a fixed height
  const imageStyle = { height: "350px", objectFit: "cover" }; // Add a fixed height for the images

  return (
    <CardGroup>
      <Card border="warning" style={cardStyle}>
        <Card.Img variant="top" src="images/d1n.jpg" style={imageStyle} />
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

      <Card border="warning" style={cardStyle}>
        <Card.Img variant="top" src="images/v1.jpeg" style={imageStyle} />
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
      <Card border="warning" style={cardStyle}>
        <Card.Img variant="top" src="images/y3n.jpg" style={imageStyle} />
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

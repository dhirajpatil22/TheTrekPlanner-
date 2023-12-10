import React, { useEffect, useState } from "react";
import { Container, Carousel, Card, Button, Row, Col } from "react-bootstrap";
import { getAllTreks } from "../services/userApis";

export function Home() {
  const [treks, setTreks] = useState([]);

  async function callFetchTreks() {
    try {
      const resp = await getAllTreks();
      setTreks(resp.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    callFetchTreks();
  }, []);

  console.log(treks.data, "TREEEEEKK");

  return (
    <div style={{ backgroundColor: "#282c34" }}>
     
      <Container>
        <Carousel>
          <Carousel.Item>
            <img className="slide w-100" src="images/5.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slide w-100" src="images/9.jpg" alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slide w-100" src="images/8.jpg" alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Row className="justify-content-around">
        {treks.data && treks.data.length > 0 && treks.data.map((trek) => (

            <Col  xs={12} md={6} lg={4}>
              <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "400px", margin: "10px" }}
          >
            <Card.Img variant="top" src={`${trek.imgUrl}`} />
            <Card.Body>
           

              <Card.Title>{` 🚩 ${trek.name}`} {`₹ ${trek.price}`}</Card.Title>
              <Card.Text>
              📍 location:{` ${trek.location}`}
              <br />
                distance:{trek.distance}
              <br />
              difficulty:{trek.difficulty}
              </Card.Text>
              <Card.Text>
              {trek.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

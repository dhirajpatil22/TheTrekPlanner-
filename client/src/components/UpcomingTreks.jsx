import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./UpcomingTreks.css";
import { LinkContainer } from "react-router-bootstrap";

export function UpcomingTreks() {
  return (
    <div style={{ backgroundColor: "#282c34" }}>
      {" "}
      <div className="d-flex justify-content-around">
        <Container>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "650px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/ha.jpeg" />
            <Card.Body>
              <Card.Title>Harishchandragad</Card.Title>
              <Card.Text>
                A historic hill fort in Maharashtra, India, is renowned for its
                ancient temples, breathtaking landscapes, and challenging
                trekking trails.
              </Card.Text>
              <Link to="/signin">
                <Button variant="primary">Book Trek</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "650px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/ha9.jpeg" />
            <Card.Body>
              <Card.Title>Irshalgad Fort</Card.Title>
              <Card.Text>
                A picturesque trekking destination in Maharashtra with
                breathtaking views of the surrounding landscapes
              </Card.Text>
              <Button variant="primary">Book Trek</Button>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "650px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/ha3.jpeg" />
            <Card.Body>
              <Card.Title>Korigad Fort</Card.Title>
              <Card.Text>
                A historic hill fort in Maharashtra, known for its strategic
                location and panoramic views of the Western Ghats.
              </Card.Text>
              <Button variant="primary">Book Trek</Button>
            </Card.Body>
          </Card>
        </Container>
        <Container>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "650px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/ha1712.jpeg" />
            <Card.Body>
              <Card.Title>Jangira Fort</Card.Title>
              <Card.Text>
                A lesser-known hill fort in Maharashtra, offering a serene trek
                and glimpses of historical architecture amid nature.
              </Card.Text>
              <Link to="https://www.google.com">
                <Button variant="primary">Book Trek</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "650px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/ha5.jpeg" />
            <Card.Body>
              <Card.Title>Pratapgad Fort</Card.Title>
              <Card.Text>
                A historic hill fort in Maharashtra, known for the Battle of
                Pratapgad and the majestic Bhavani Temple located at its
                summit..
              </Card.Text>
              <Button variant="primary">Book Trek</Button>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "650px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/ha6.jpeg" />
            <Card.Body>
              <Card.Title>Lohagad Fort</Card.Title>
              <Card.Text>
                A formidable hill fort near Pune, Maharashtra, with a rich
                history and panoramic views, offering an adventurous trekking
                experience.
              </Card.Text>
              <Button variant="primary">Book Trek</Button>
            </Card.Body>
          </Card>
        </Container>
        <Container>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "650px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/ha7.jpeg" />
            <Card.Body>
              <Card.Title>Karnala Fort</Card.Title>
              <Card.Text>
                A historic hill fort in Raigad district, Maharashtra, known for
                its bird sanctuary and trekking trails, providing stunning views
                of the surrounding landscape.
              </Card.Text>
              <Button variant="primary">Book Trek</Button>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "650px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/ha8.jpeg" />
            <Card.Body>
              <Card.Title>Korigad Fort</Card.Title>
              <Card.Text>
                A hill fort in Pune district, Maharashtra, offering panoramic
                views of the Western Ghats, known for its trekking trails and
                historic significance.
              </Card.Text>
              <Button variant="primary">Book Trek</Button>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "650px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/ha14.jpeg" />
            <Card.Body>
              <Card.Title>Kalsubai Fort</Card.Title>
              <Card.Text>
                The highest peak in the Western Ghats of Maharashtra, India,
                offering breathtaking views and a popular trekking destination.
              </Card.Text>
              <Button variant="primary">Book Trek</Button>
            </Card.Body>
          </Card>
        </Container>
        <Container>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "650px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/ha10.jpeg" />
            <Card.Body>
              <Card.Title>Tikona Fort</Card.Title>
              <Card.Text>
                A prominent hill fort in Maharashtra, India, celebrated for its
                trekking trails, ancient ruins, and panoramic vistas of the
                Sahyadri mountain range.
              </Card.Text>
              <Button variant="primary">Book Trek</Button>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "650px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/ha11.jpeg" />
            <Card.Body>
              <Card.Title>Sinhagad Fort</Card.Title>
              <Card.Text>
                A historic hill fortress near Pune, Maharashtra, known for its
                strategic significance and panoramic views of the surrounding
                landscape.
              </Card.Text>
              <Button variant="primary">Book Trek</Button>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "650px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/ha13.jpeg" />
            <Card.Body>
              <Card.Title>Tung Fort</Card.Title>
              <Card.Text>
                A hill fort in Maharashtra, India, offering scenic trekking
                routes and historical ruins atop its summit.
              </Card.Text>
              <Button variant="primary">Book Trek</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}

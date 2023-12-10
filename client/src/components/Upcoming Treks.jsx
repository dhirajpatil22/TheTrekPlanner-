import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./UpcomingTreks.css"; // Import a CSS file for styling

export function UpcomingTreks() {
  return (
    <div style={{ backgroundColor: "#282c34" }}>
      {" "}
      {/* Set background color for the entire page */}
      <Container>
        {/* <Carousel>
          <Carousel.Item>
            <img
              className="slide w-100"
              src="images/5.jpg"
              alt="First slide"
            ></img>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide w-100"
              src="images/9.jpg"
              alt="First slide"
            ></img>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide w-100"
              src="images/8.jpg"
              alt="First slide"
            ></img>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
        {/* //Cards begin from here */}
      </Container>
      <div className="d-flex justify-content-around">
        <Container>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "350px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/1.webp" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "350px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/1.webp" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "350px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/1.webp" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Container>
        <Container>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "350px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/1.webp" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="https://www.google.com">
                <Button variant="primary">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "350px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/1.webp" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "350px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/1.webp" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Container>
        <Container>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "350px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/1.webp" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "350px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/1.webp" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "350px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/1.webp" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Container>
        <Container>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "350px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/1.webp" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "350px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/1.webp" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card
            className="bg-dark text-white"
            style={{ width: "300px", height: "350px", margin: "10px" }}
          >
            <Card.Img variant="top" src="images/1.webp" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}

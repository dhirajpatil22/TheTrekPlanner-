import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export function Admin() {
  const location = useLocation();
  const { fromLogin } = location.state || {};

  const [treks, setTreks] = useState([]);
  const [newTrek, setNewTrek] = useState({
    name: "",
    location: "",
    difficulty: "",
    distance: "",
    duration: "",
    description: "",
    price: "",
    imgUrl: "",
  });
  const [editTrek, setEditTrek] = useState(null);

  useEffect(() => {
    fetchTreks();
  }, []);

  const fetchTreks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/trek/getTreks", {
        headers: {
          authorization: `${fromLogin.token}`,
        },
      });

      setTreks(response.data.data);
    } catch (error) {
      console.error("Error fetching treks:", error);
    }
  };

  const handleCreateTrek = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/trek/addTrek",
        newTrek,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${fromLogin.token}`,
          },
        }
      );
      if (response.data.status === 201 || response.data.status === 200) {
        setNewTrek({
          name: "",
          location: "",
          difficulty: "",
          distance: "",
          duration: "",
          description: "",
          price: "",
          imgUrl: "",
        });

        fetchTreks();
      } else {
        console.error("Error creating trek:", response.status);
      }
    } catch (error) {
      console.error("Error creating trek:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTrek((prevTrek) => ({ ...prevTrek, [name]: value }));
  };

  const handleEditTrek = (trek) => {
    setEditTrek(trek);
    setNewTrek({
      name: trek.name,
      location: trek.location,
      difficulty: trek.difficulty,
      distance: trek.distance,
      duration: trek.duration,
      description: trek.description,
      price: trek.price,
      imgUrl: trek.imgUrl,
    });
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/trek/updateTrek/?trekId=${editTrek.trekId}`,
        newTrek,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${fromLogin.token}`,
          },
        }
      );
      if (response.data.status === 200) {
        setEditTrek(null);
        setNewTrek({
          name: "",
          location: "",
          difficulty: "",
          distance: "",
          duration: "",
          description: "",
          price: "",
          imgUrl: "",
        });

        fetchTreks();
      } else {
        console.error("Error updating trek:", response.status);
      }
    } catch (error) {
      console.error("Error updating trek:", error);
    }
  };

  const handleDeleteTrek = async (trekId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/trek/deleteTrek/?trekId=${trekId}`,
        {
          headers: {
            Authorization: `${fromLogin.token}`,
          },
        }
      );
      if (response.status === 200) {
        fetchTreks();
      } else {
        console.error("Error deleting trek:", response.status);
      }
    } catch (error) {
      console.error("Error deleting trek:", error);
    }
  };

  return (
    <Container>
      <h4>This is admin page</h4>
      <p>You are logged in as {fromLogin.data.name}</p>

      {/* Create Form */}
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h5>Create New Trek</h5>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={newTrek.name}
                    onChange={handleInputChange}
                    name="name"
                  />
                </Form.Group>

                <Form.Group controlId="formLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    value={newTrek.location}
                    onChange={handleInputChange}
                    name="location"
                  />
                </Form.Group>

                <Form.Group controlId="formDifficulty">
                  <Form.Label>Difficulty</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter difficulty"
                    value={newTrek.difficulty}
                    onChange={handleInputChange}
                    name="difficulty"
                  />
                </Form.Group>

                <Form.Group controlId="formDistance">
                  <Form.Label>Distance</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter distance"
                    value={newTrek.distance}
                    onChange={handleInputChange}
                    name="distance"
                  />
                </Form.Group>

                <Form.Group controlId="formDuration">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter duration"
                    value={newTrek.duration}
                    onChange={handleInputChange}
                    name="duration"
                  />
                </Form.Group>

                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    value={newTrek.description}
                    onChange={handleInputChange}
                    name="description"
                  />
                </Form.Group>

                <Form.Group controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter price"
                    value={newTrek.price}
                    onChange={handleInputChange}
                    name="price"
                  />
                </Form.Group>

                <Form.Group controlId="formImgUrl">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter image URL"
                    value={newTrek.imgUrl}
                    onChange={handleInputChange}
                    name="imgUrl"
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleCreateTrek}>
                  Create Trek
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Display Treks */}
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h5>Treks List</h5>
              <ul>
                {treks.map((trek) => (
                  <li key={trek._id}>
                    {trek.name} - {trek.location}
                    <Button onClick={() => handleEditTrek(trek)}>
                      Edit Trek
                    </Button>
                    <Button onClick={() => handleDeleteTrek(trek.trekId)}>
                      Delete Trek
                    </Button>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Edit Form */}
      {editTrek && (
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <h5>Edit Trek</h5>
                <Form>
                  <Form.Group controlId="formEditName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={newTrek.name}
                      onChange={handleInputChange}
                      name="name"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEditLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter location"
                      value={newTrek.location}
                      onChange={handleInputChange}
                      name="location"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEditDifficulty">
                    <Form.Label>Difficulty</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter difficulty"
                      value={newTrek.difficulty}
                      onChange={handleInputChange}
                      name="difficulty"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEditDistance">
                    <Form.Label>Distance</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter distance"
                      value={newTrek.distance}
                      onChange={handleInputChange}
                      name="distance"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEditDuration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter duration"
                      value={newTrek.duration}
                      onChange={handleInputChange}
                      name="duration"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEditDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter description"
                      value={newTrek.description}
                      onChange={handleInputChange}
                      name="description"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEditPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter price"
                      value={newTrek.price}
                      onChange={handleInputChange}
                      name="price"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEditImgUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter image URL"
                      value={newTrek.imgUrl}
                      onChange={handleInputChange}
                      name="imgUrl"
                    />
                  </Form.Group>

                  <Button variant="primary" onClick={handleSaveEdit}>
                    Save Changes
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

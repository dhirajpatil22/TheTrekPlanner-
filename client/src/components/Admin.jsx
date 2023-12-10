import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button, Table, Modal } from "react-bootstrap";

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
  });
  const [editTrek, setEditTrek] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    // Fetch initial data on component mount
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
        });
        // Fetch updated data after creating a new trek
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
        });
        // Fetch updated data after editing the trek
        fetchTreks();
      } else {
        console.error("Error updating trek:", response.status);
      }
    } catch (error) {
      console.error("Error updating trek:", error);
    }
  };

  const handleDeleteTrek = async () => {
    setShowConfirmation(false); // Close the confirmation modal

    try {
      const response = await axios.delete(
        `http://localhost:4000/trek/deleteTrek/?trekId=${editTrek.trekId}`,
        {
          headers: {
            Authorization: `${fromLogin.token}`,
          },
        }
      );
      if (response.status === 200) {
        // Fetch updated data after deleting a trek
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
      <Row>
        <Col>
          <h4>This is admin page</h4>
          <p>You are logged in as {fromLogin.data.name}</p>
        </Col>
      </Row>

      {/* Create Form */}
      <Row className="mb-3">
        <Col>
          <h5>Create New Trek</h5>
          <form>
            <Row className="mb-3">
              <Col>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newTrek.name}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </Col>
              <Col>
                <label>Location:</label>
                <input
                  type="text"
                  name="location"
                  value={newTrek.location}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <label>Difficulty:</label>
                <input
                  type="text"
                  name="difficulty"
                  value={newTrek.difficulty}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </Col>
              <Col>
                <label>Distance:</label>
                <input
                  type="text"
                  name="distance"
                  value={newTrek.distance}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <label>Duration:</label>
                <input
                  type="text"
                  name="duration"
                  value={newTrek.duration}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </Col>
              <Col>
                <label>Price:</label>
                <input
                  type="text"
                  name="price"
                  value={newTrek.price}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={newTrek.description}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <button
                  type="button"
                  onClick={handleCreateTrek}
                  className="btn btn-primary"
                >
                  Create Trek
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>

      {/* Treks List */}
      <Row>
        <Col>
          <h5>Treks List</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Difficulty</th>
                <th>Distance</th>
                <th>Duration</th>
                <th>Price</th> {/* Updated from Description to Price */}
                <th>Description</th> {/* Updated from Price to Description */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {treks.map((trek) => (
                <tr key={trek._id}>
                  <td>{trek.name}</td>
                  <td>{trek.location}</td>
                  <td>{trek.difficulty}</td>
                  <td>{trek.distance}</td>
                  <td>{trek.duration}</td>
                  <td>{trek.price}</td>{" "}
                  {/* Updated from Description to Price */}
                  <td>{trek.description}</td>{" "}
                  {/* Updated from Price to Description */}
                  <td>
                    <Button variant="info" onClick={() => handleEditTrek(trek)}>
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => {
                        setEditTrek(trek);
                        setShowConfirmation(true);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Edit Form */}
      {editTrek && (
        <Row>
          <Col>
            <h5>Edit Trek</h5>
            <form>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={newTrek.name}
                onChange={handleInputChange}
              />

              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={newTrek.location}
                onChange={handleInputChange}
              />

              <label>Difficulty:</label>
              <input
                type="text"
                name="difficulty"
                value={newTrek.difficulty}
                onChange={handleInputChange}
              />

              <label>Distance:</label>
              <input
                type="text"
                name="distance"
                value={newTrek.distance}
                onChange={handleInputChange}
              />

              <label>Duration:</label>
              <input
                type="text"
                name="duration"
                value={newTrek.duration}
                onChange={handleInputChange}
              />

              <label>Price:</label>
              <input
                type="text"
                name="price"
                value={newTrek.price}
                onChange={handleInputChange}
              />

              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={newTrek.description}
                onChange={handleInputChange}
              />

              <button type="button" onClick={handleSaveEdit}>
                Save Changes
              </button>
            </form>
          </Col>
        </Row>
      )}

      {/* Confirmation Modal */}
      <Modal
        show={showConfirmation}
        onHide={() => setShowConfirmation(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this trek?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmation(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteTrek}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

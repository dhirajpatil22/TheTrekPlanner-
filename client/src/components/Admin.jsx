import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

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
    price: ""
  });
  const [editTrek, setEditTrek] = useState(null);

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
          price: ""
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
      price: trek.price
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
          price: ""
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
    <div>
      <h4>This is admin page</h4>
      <p>You are logged in as {fromLogin.data.name}</p>

      {/* Create Form */}
      <div>
        <h5>Create New Trek</h5>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newTrek.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newTrek.location}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="difficulty"
            placeholder="Difficulty"
            value={newTrek.difficulty}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="distance"
            placeholder="Distance"
            value={newTrek.distance}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={newTrek.duration}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newTrek.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={newTrek.price}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleCreateTrek}>
            Create Trek
          </button>
        </form>
      </div>

      {/* Display Treks */}
      <div>
        <h5>Treks List</h5>
        <ul>
          {treks.map((trek) => (
            <li key={trek._id}>
              {trek.name} - {trek.location}
              <button onClick={() => handleEditTrek(trek)}>
                Edit Trek
              </button>
              <button onClick={() => handleDeleteTrek(trek.trekId)}>
                Delete Trek
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Edit Form */}
      {editTrek && (
        <div>
          <h5>Edit Trek</h5>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newTrek.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={newTrek.location}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="difficulty"
              placeholder="Difficulty"
              value={newTrek.difficulty}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="distance"
              placeholder="Distance"
              value={newTrek.distance}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="duration"
              placeholder="Duration"
              value={newTrek.duration}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newTrek.description}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={newTrek.price}
              onChange={handleInputChange}
            />
            <button type="button" onClick={handleSaveEdit}>
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
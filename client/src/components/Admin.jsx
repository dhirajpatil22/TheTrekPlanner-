<<<<<<< HEAD
// import { useLocation } from "react-router-dom";
// export function Admin(){
// const location = useLocation();
// const { fromLogin } = location.state || {};

//   // Access the props passed from the login page
//   console.log("Props from login:", fromLogin);
//   <p>you are logged in as {fromLogin.data.name} </p>
//     return (
//         <div>
//             <h4>This is admin page</h4>
//              <p>you are logged in as {fromLogin.data.name} </p>
//         </div>

//     )
// }
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

=======
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

>>>>>>> db31e28c272d6ac61209e4f50b42baefa5c92328
export function Admin() {
  const location = useLocation();
  const { fromLogin } = location.state || {};

<<<<<<< HEAD
  const [tableData, setTableData] = useState([]);
  const token = fromLogin.token; // Replace with your actual access token

  useEffect(() => {
    // Fetch data from backend with token
    axios
      .get("http://localhost:4000/trek/getTreks", {
        headers: {
          Authorization: ` ${token}`,
        },
      })
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [token]);

  // Handle update button click
  const handleUpdate = (id) => {
    // Implement the logic for updating the data
    console.log("Update clicked for ID:", id);
  };

  // Handle delete button click
  const handleDelete = (id) => {
    // Implement the logic for deleting the data
    console.log("Delete clicked for ID:", id);
  };
  console.log(tableData,"tableDatatableDatatableData");
=======
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

>>>>>>> db31e28c272d6ac61209e4f50b42baefa5c92328
  return (
    <div>
      <h4>This is admin page</h4>
      <p>You are logged in as {fromLogin.data.name}</p>

<<<<<<< HEAD
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleUpdate(item.id)}>Update</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))} */}
          {/* {tableData.map((ele) => {
            console.log(ele);
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>
                  <button onClick={() => handleUpdate(ele.id)}>Update</button>
                  <button onClick={() => handleDelete(ele.id)}>Delete</button>
                </td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
}
=======
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
>>>>>>> db31e28c272d6ac61209e4f50b42baefa5c92328

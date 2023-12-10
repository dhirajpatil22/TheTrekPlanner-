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

export function Admin() {
  const location = useLocation();
  const { fromLogin } = location.state || {};

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
  return (
    <div>
      <h4>This is admin page</h4>
      <p>You are logged in as {fromLogin.data.name}</p>

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

import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Header } from "./Header";
import { Form, Button, Alert } from "react-bootstrap";

import { signIn } from "../services/userApis";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const [formData, setFormdata] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Initialize useHistory

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn(formData);
      console.log(response.data, "response");

      // Check the response for invalid login condition
      if (response.data && response.data.invalidLogin) {
        setErrorMessage("Invalid email or password. Please try again.");
        setSuccessMessage(""); // Reset success message
      } else {
        console.log(response.data.data,"userRolesuserRoles")
        // Set success message and redirect to home
        if (response.data.data.userRoles.includes("admin")) {
            setSuccessMessage("Login successful. Redirecting to admin...");
           
              navigate("/admin",{ state: { fromLogin: response.data } }); // Redirect to admin page
           
          } else {
            setSuccessMessage("Login successful. Redirecting to user...");
            
              navigate("/user",{ state: { fromLogin:  response.data } }); // Redirect to user page
           
          }
        setErrorMessage("",{ state: { fromLogin: true } }); // Reset error message
       
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to sign in. Please try again.");
      setSuccessMessage(""); // Reset success message
    }
  };

  return (
    <Container>
      <Header text="SignIn Here" />
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

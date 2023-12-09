import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Header } from "./Header";
import { Form, Button, Alert } from "react-bootstrap";
import email_icon from './assets/email.png';
import password_icon from './assets/password.png';

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
        // Set success message and redirect to home
        setSuccessMessage("Login successful. Redirecting to home...");
        setErrorMessage(""); // Reset error message
        setTimeout(() => {
         navigate("/") // Redirect to the home page
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to sign in. Please try again.");
      setSuccessMessage(""); // Reset success message
    }
  };

  return (
    <Container>
      <Header text="Sign In" />
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleLogin}>
      <div className="input">
      <img src={email_icon} alt="" />
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        </div>

        <div className="input">
        <img src={password_icon} alt="" />
        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        </div>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

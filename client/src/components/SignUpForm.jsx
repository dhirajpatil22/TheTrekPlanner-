import Container from "react-bootstrap/esm/Container";
import { Header } from "./Header";
import { Form, Col, Row, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { signUpAdmin, signUpUser } from "../services/userApis";

export function SignUpForm() {
  const [formData, setFormdata] = useState({ name: "", email: "", password: "" });
  const [userType, setUserType] = useState("user");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    setUserType(e.target.value);
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim() || formData.email.indexOf('@') === -1) {
      setValidationError("Please fill in all fields and enter a valid email");
      return false;
    }

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(formData.password)) {
      setValidationError("Please enter a strong password");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      let response;
      if (userType === "user") {
        response = await signUpUser(formData);
        
        console.log(response,"RES");
      } else if (userType === "admin") {
        response = await signUpAdmin(formData);
        console.log(response,"RES");
      }

      if (response && response.status === 200) {
        setResponseMessage("User Registered");
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 1500);
      } else {
        setValidationError("Failed to register user. Please try again.");
      }

      setFormdata({ name: "", email: "", password: "" });
    } catch (error) {
      console.log(error);
      setValidationError("Failed to register user. Please try again.");
    }
  };

  return (
    <Container>
      <Header text="Register Here" />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" name="name" value={formData.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange} />
        </Form.Group>

        <Form.Check
          type="radio"
          label="User"
          name="user-type"
          value="user"
          checked={userType === "user"}
          onChange={handleRadioChange}
        />
        <Form.Check
          type="radio"
          label="Admin"
          name="user-type"
          value="admin"
          checked={userType === "admin"}
          onChange={handleRadioChange}
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {validationError && <Alert variant="danger">{validationError}</Alert>}

      {isSubmitted && responseMessage && <Alert variant="success">{responseMessage}</Alert>}
    </Container>
  );
}

import Container from "react-bootstrap/esm/Container";
import { Header } from "./Header";
import { Form, Col, Row, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { signUpAdmin, signUpUser } from "../services/userApis";
import user_icon from './assets/person.png';
import email_icon from './assets/email.png';
import password_icon from './assets/password.png';
import img1 from './assets/1.png';
import img2 from './assets/3.png';
import img3 from './assets/4.png';
import './SignUp.css';

export function SignUp() {
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

      if (response && (response.status === 200 || response.status === 201)) {
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
    <div className="background-image">
    <Container>   
    
      <div className="header">
      <div className="text">Sign Up</div>
      <div className="underline"></div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <Form.Control
              type="email"
              placeholder="Email Id"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <div className="radio-buttons">
          <Form.Check
            type="radio"
            label="User"
            name="user-type"
            value="user"
            checked={userType === 'user'}
            onChange={handleRadioChange}
          />
          <Form.Check
            type="radio"
            label="Admin"
            name="user-type"
            value="admin"
            checked={userType === 'admin'}
            onChange={handleRadioChange}
          />
        </div>
        <Button className="submit" variant="primary" type="submit">
          Sign Up        
        </Button>
        
        
      </Form>

      {validationError && <Alert variant="danger">{validationError}</Alert>}

      {isSubmitted && responseMessage && <Alert variant="success">{responseMessage}</Alert>}
    </Container>
    </div>
  );
}











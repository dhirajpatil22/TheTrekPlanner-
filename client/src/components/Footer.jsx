// components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <Container fluid className="bg-dark text-white p-3">
      <Row>
        <Col>
          <p>© 2023 Your Company. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}

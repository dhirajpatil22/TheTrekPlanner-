import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

export function NavigationBar(){
    return(
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">DurgNaad</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/upcoming-treks">
                <Nav.Link>Upcoming Treks</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/sign-up">
                <Nav.Link>Sign Up</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/sign-up">
                <Nav.Link>Sign In</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about-us">
                <Nav.Link>About Us</Nav.Link>
                </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/">Meu site</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Item>
                            <Link className="nav-link" to="/login">Login</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/sobre">Sobre</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
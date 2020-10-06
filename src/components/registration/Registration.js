import React from 'react';
import '../../styles/Login.css'
import { Form, Button, Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Polling-app</Navbar.Brand>
                <Nav className="mr-auto">

                </Nav>
                <Link to="/">
                    <Button className="float-right" variant="outline-info">
                        Sign In
                    </Button>
                </Link>
            </Navbar>
            <Container>
                <Form>
                <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Select User Type</Form.Label>
                    <Form.Control as="select">
                        <option>--select--</option>
                        <option>Admin User</option>
                        <option>Guest User</option>
                    </Form.Control>
                    </Form.Group>
                    <Link to='/regdsuccess'>
                    <Button variant="dark" size="lg" block>
                        Register Now
                    </Button>
                    </Link>
                </Form>
            </Container>
        </div>
    )
}
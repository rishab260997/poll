import React, { useState } from 'react';
import '../../styles/Login.css'
import { Form, Button, Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Login() {
    const [userName, userNameUpdate] = useState('')
    const [password, passwordUpdate] = useState('')
    const formDataHandler = () => {
        fetch('https://secure-refuge-14993.herokuapp.com/add_user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: userName, password: password })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Polling-app</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                </Nav>
                <Link to="/registration">
                    <Button className="float-right" variant="outline-info">
                        SignUp
                    </Button>
                </Link>
            </Navbar>
            <Container>
                <Form onSubmit={formDataHandler()}>
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
                    <Link to='/welcome'>
                        <Button type="Submit" variant="dark" size="lg" block>
                            Sign In
                        </Button>
                    </Link>
                </Form>
            </Container>
        </div>
    )
}
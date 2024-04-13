// import "./Login.css"

// const login = () => {
//     return {}
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     var errorMessage = document.getElementById('error-message');
  
//     // Validate email and password
//     if (email.endsWith("@tierra.vn") && password === "01062016") {
//       // Success, redirect to dashboard or do something else
//       errorMessage.textContent = '';
//       console.log('Login successful');
//       // For demonstration purposes, otherwise you'd redirect the user
//       alert('Login successful!');
//     } else {
//       // Failed, show error message
//       errorMessage.textContent = 'Invalid email or password.';
//     }
//   }

// //   <div class="login-container">
// //   <div id="error-message" class="error-message"></div>
// //   <input type="email" id="email" class="form-input" placeholder="Email" required>
// //   <input type="password" id="password" class="form-input" placeholder="Password" required>
// //   <button id="login-button" class="login-button">Log In</button>
// // </div>  

//   // Add event listener for the login button
//   document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('login-button').addEventListener('click', login);
//   });

//   export default login;

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Login.css';
import tierraLogo from "../../components/Assets/tierra-logo.png";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic, e.g., call a login function passed via props
    onLogin(email, password);
  };

  return (

    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <Card>
            <Card.Body>
            <img
            src={tierraLogo} // Replace with your actual logo path
            alt="Company Logo"
            style={{ width: '150px', marginBottom: '2rem' }} // Adjust width as needed
          />
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;

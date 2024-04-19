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
                <Button variant="primary" type="submit">
                  Login with Outlook
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

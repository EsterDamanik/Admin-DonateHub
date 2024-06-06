import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Admin Login</h2>
      <div className="login-box">
        <Form>
          <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email"  />
          </Form.Group>

          <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"  />
          </Form.Group>
        </Form>
      </div>
      <NavLink to="/Home">
        <Button variant="primary" type="submit" className="login-button"> Masuk
        </Button>
      </NavLink>
    </div>
  );
};

export default Login;

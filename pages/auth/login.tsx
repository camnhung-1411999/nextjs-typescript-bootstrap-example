import React from 'react';
import {
  Col, Row,
} from 'react-bootstrap';
import LoginForm from 'containers/auth/LoginForm';

export default function Login() {
  return (
    <Row className='auth-container'>
      <Col xs={12} md={7} className='auth-image'>
      </Col>
      <Col xs={12} md={5}>
          <LoginForm/>
      </Col>
    </Row>
  );
}

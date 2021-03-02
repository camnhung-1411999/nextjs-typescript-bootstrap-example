import React from 'react';
import {
  Col, Row,
} from 'react-bootstrap';
import RegisterForm from 'containers/auth/RegisterForm';

export default function Register() {
  return (
    <Row className='auth-container'>
      <Col xs={12} md={7} className='auth-image'>
      </Col>
      <Col xs={12} md={5}>
        <RegisterForm/>
      </Col>
    </Row>
  );
}

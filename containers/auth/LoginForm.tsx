import React from 'react';
import * as formik from 'formik';
import * as yup from 'yup';
import Google from 'containers/auth/Google';
import Facebook from 'containers/auth/Facebook';

import {
    Col, Form, Button, InputGroup,
} from 'react-bootstrap';

export default function LoginForm() {
    const { Formik } = formik;
    const schema = yup.object().shape({
        email: yup.string().email('Email invalid').required('Email is required field'),
        password: yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    });
    return (
        <>
            <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                    email: '',
                    password: '',
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                }) => (
                    <Form noValidate onSubmit={handleSubmit} className='auth-content'>
                        <h1 className="auth-title">Login Account</h1>
                        <div className='social-container'>
                            <Google />
                            <Facebook />
                        </div>
                        <Form.Row>
                            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="Email"
                                        aria-describedby="inputGroupPrepend"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                <Form.Label>Password</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        aria-describedby="inputGroupPrepend"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit" className="auth-submit">Login</Button>
                    </Form>
                )}
            </Formik>
            <div className=" auth-link-login">
                <a href="/auth/register" className="auth-password">Forgot password?</a>
                <a href="/auth/register">Have account? Go to register</a>
            </div>
        </>
    );
}

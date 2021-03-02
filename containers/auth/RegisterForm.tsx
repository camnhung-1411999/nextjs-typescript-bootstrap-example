import React from 'react';
import * as formik from 'formik';
import * as yup from 'yup';
import {
    Col, Form, Button, InputGroup,
} from 'react-bootstrap';
import Google from 'containers/auth/Google';
import Facebook from 'containers/auth/Facebook';

export default function RegisterForm() {
    const { Formik } = formik;
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email('Email invalid').required('Email is required field'),
        password: yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        phone: yup.string().required('Phone is required field').matches(/[0-9]/, 'Phone must number 0-9.')
            .max(10)
            .min(10),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });
    return (
        <>
            <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                    firstName: 'Mark',
                    lastName: 'Otto',
                    email: '',
                    password: '',
                    phone: '',
                    city: '',
                    state: '',
                    zip: '',
                    terms: false,
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors,
                }) => (
                    <Form noValidate onSubmit={handleSubmit} className='auth-content'>
                        <h1 className="auth-title">Register Account</h1>
                        <div className="auth-agency">
                            <a href="/auth/login">or Register to become Agency</a>
                        </div>
                        <div className='social-container'>
                            <Google />
                            <Facebook />
                        </div>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationFormik01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    isValid={touched.firstName && !errors.firstName}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationFormik02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    isValid={touched.lastName && !errors.lastName}
                                />

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
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
                            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                <Form.Label>Phone number</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        placeholder="Phone"
                                        aria-describedby="inputGroupPrepend"
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        isInvalid={!!errors.phone}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.phone}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                <Form.Label>Gender</Form.Label>
                                <div>
                                    <Form.Check
                                        inline
                                        label="Male"
                                        type='radio'
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                        inline
                                        label="Female"
                                        type='radio'
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        inline
                                        label="Others"
                                        type='radio'
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                    />
                                </div>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationFormik03">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    isInvalid={!!errors.city}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.city}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik04">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="State"
                                    name="state"
                                    value={values.state}
                                    onChange={handleChange}
                                    isInvalid={!!errors.state}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.state}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik05">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Zip"
                                    name="zip"
                                    value={values.zip}
                                    onChange={handleChange}
                                    isInvalid={!!errors.zip}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.zip}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                id="validationFormik0"
                            />
                        </Form.Group>
                        <Button type="submit" className="auth-submit">Register</Button>
                    </Form>
                )}
            </Formik>
            <div className="auth-link">
                <a href="/auth/login">Have account? Go to login</a>
            </div>
        </>
    );
}

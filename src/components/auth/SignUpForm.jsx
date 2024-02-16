import * as Yup from 'yup';
import React, { useState } from 'react';
import { Button, Input, InputGroup, InputRightElement, useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const SignUpForm = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const handleSignUp = () => {
        const toast = useToast();
        const userName = localStorage.setItem('user', '')
        const email = localStorage.setItem('email', '')
        toast({
            title: 'Account Created',
            description: "We have created a new account !",
            status: 'success',
            duration: 9000,
            position: 'bottom-right',
            isClosable: true,
        });
        navigate('/')
    }

    return (
        <Formik
            initialValues={{
                userName: '',
                email: '',
                password: '',
                rememberMe: false,
            }}
            validationSchema={Yup.object({
                userName: Yup.string().required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().required('Required'),
                rememberMe: Yup.boolean(),
            })}
            onSubmit={handleSignUp}>
            <Form>
                <div>
                    <label htmlFor="userName">Username:</label>
                    <Field name="userName" as={Input} placeholder="UserName" />
                    <ErrorMessage name="userName" component="div" className="error text-danger d-flex justify-content-end" />
                </div>
                <div className="pt-1">
                    <label htmlFor="email">Email:</label>
                    <Field name="email" type="email" as={Input} placeholder="Email" />
                    <ErrorMessage name="email" component="div" className="error text-danger d-flex justify-content-end" />
                </div>
                <div className="pt-1">
                    <label htmlFor="password">Password:</label>
                    <InputGroup size="md">
                        <Field name="password">
                            {({ field }) => (
                                <Input
                                    {...field}
                                    pr="4.5rem"
                                    type={show ? 'text' : 'password'}
                                    placeholder="Enter password"
                                />
                            )}
                        </Field>
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <ErrorMessage name="password" component="div" className="error text-danger d-flex justify-content-end" />
                </div>
                <Button type="submit" colorScheme="" className="w-100 mt-4 btn-login" borderRadius="none" fontSize="14px">
                    SignUp
                </Button>
                <Link to="/login">
                    <h6 className="mt-3 signUp">Login</h6>
                </Link>
            </Form>
        </Formik>
    );
};


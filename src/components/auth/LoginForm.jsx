import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Checkbox, Input, InputGroup, InputRightElement, useToast } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { validationSchema } from '../schema';

export const LoginForm = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);
    const handleSubmit = async (values, { setSubmitting }) => {
        const response = await axios.post('http://localhost:8080/register', { email, password });
        console.log(response.json());
        toast({
            title: 'Successfully Logined',
            description: "Welcome Back !!",
            status: 'success',
            duration: 9000,
            position: 'bottom-right',
            isClosable: true,
        });
        setTimeout(() => {
            setSubmitting(false);
            const loggedInUsers = JSON.parse(localStorage.getItem('loggedInUsers')) || [];
            const payloadUsers = [...loggedInUsers, values.email]
            localStorage.setItem('loggedInUsers', JSON.stringify(payloadUsers));
            navigate('/');
        }, 400);
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            
        >
            <Form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <Field name="email">
                        {({ field }) => (
                            <Input {...field} id="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        )}
                    </Field>
                    <ErrorMessage name="email" component="div" className="error text-danger d-flex justify-content-end" />
                </div>

                <div>
                    <label htmlFor="password" className='pt-4'>Password:</label>
                    <Field name="password">
                        {({ field }) => (
                            <InputGroup size='md'>
                                <Input {...field} id="password" pr='4.5rem' type={show ? 'text' : 'password'} placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        )}
                    </Field>
                    <ErrorMessage name="password" component="div" className="error text-danger d-flex justify-content-end" />
                </div>

                <div className='d-flex justify-content-between align-item-center pt-3'>
                    <Checkbox className=''>Remember Me</Checkbox>
                    <Link to={'/forgot-password'}>
                        <b className='signUp'>Forgot Password?</b>
                    </Link>
                </div>
                <Button colorScheme='' className='w-100 mt-4 btn-login' borderRadius='none' fontSize='14px' type="submit">Login</Button>
                <Link to={'/sign-up'}>
                    <h6 className='mt-3 signUp'>SignUp</h6>
                </Link>
            </Form>
        </Formik>
    );
};

import { async } from '@firebase/util';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useUpdatePassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const handleResetPassword = async e => {
        e.preventDefault()
        e.target.reset()
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    if (sending) {
        return <Loading />
    }

    let errorElement;
    if (error) {
        errorElement = error.message;
    }

    return (
        <div className='w-25 mx-auto'>
            <Form className='my-3' onSubmit={handleResetPassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required onBlur={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Send Reset Password
                </Button>
            </Form>

            {error && <p className='text-danger'>{errorElement}</p>}

            <p className='my-2'> Go to <Link to='/login' style={{ textDecoration: 'none' }}  >LogIn Page </Link> </p>
        </div>
    );
};

export default ForgetPassword;
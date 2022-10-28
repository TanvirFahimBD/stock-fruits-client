import React, { useState } from 'react';
import SocialLogin from './SocialLogin/SocialLogin';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

// TODO jwt 
// TODO toast apply all login related

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';

    const handleLogIn = e => {
        e.preventDefault()
        e.target.reset()
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true })
    }

    if (loading) {
        return <Loading />
    }

    let errorElement;
    if (error) {
        errorElement = error.message;
    }

    return (
        <div className='w-25 mx-auto'>
            <Form className='my-3' onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required onBlur={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required onBlur={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>

            {error && <p className='text-danger'>{errorElement}</p>}

            <SocialLogin />

            <p className='my-3'><Link to='/forgetpassword' style={{ textDecoration: 'none' }} >Forget Password?</Link> </p>

            <p className='my-2'> Don't have an account? <Link to='/register' style={{ textDecoration: 'none' }}  >Sign Up For Free</Link> </p>
        </div>
    );
};

export default LogIn;
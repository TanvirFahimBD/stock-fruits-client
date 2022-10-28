import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

// TODO verify email
// TODO navigate
// TODO check more client error

const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [retypepassword, setReTypePassword] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        errorCreateUser,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification, sending, errorEmailVerify] = useSendEmailVerification(auth);

    const handleRegister = async e => {
        e.preventDefault()
        if (retypepassword === password) {
            await createUserWithEmailAndPassword(email, password, { sendEmailVerification: true })
            alert('Verification email send')
        }
        else {
            alert('Password not match')
        }
    }

    if (user) {
        console.log('us', user);
        // navigate('/')
    }

    if (loading || sending) {
        return <Loading />
    }

    let errorElement;
    if (errorCreateUser || errorEmailVerify) {
        errorElement = <p className='text-danger'>{errorCreateUser ? errorCreateUser.message : errorEmailVerify.message}</p>
    }

    return (
        <div className='w-25 mx-auto'>
            <Form className='my-3' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter Full Name" required onBlur={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required onBlur={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required onBlur={(e) => setPassword(e.target.value)} />
                </Form.Group><Form.Group className="mb-3" controlId="formBasicReTypePassword">
                    <Form.Control type="password" placeholder="Re-Type Password" required onBlur={(e) => setReTypePassword(e.target.value)} />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            {errorElement}
            <SocialLogin />
            <p className='my-3'> Already have an account? <Link to='/login' style={{ textDecoration: 'none' }}  >LogIn Now</Link> </p>
        </div>
    );
};

export default Register;
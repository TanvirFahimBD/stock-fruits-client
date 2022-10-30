import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast, useToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../../hooks/useToken';

// TODO check more remove all unused code part

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
    const [updateProfile, updating, errorUpdateProfile] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, errorEmailVerify] = useSendEmailVerification(auth);
    const [token] = useToken(user)

    const handlePassword = (e) => {
        const pass = e.target.value;
        if (/(?=.[!@#$&])/.test(pass) && /(?=.[A-Z].[A-Z])/.test(pass)) {
            setPassword(pass)
        }
        else {
            toast('Enter at least 2 special letter, 4 uppercase')
        }
    }

    const handleRetypePassword = (e) => {
        const retypePass = e.target.value;
        if (retypePass === password) {
            setReTypePassword(retypePass)
        }
        else {
            toast('Password not match')
        }
    }

    const handleRegister = async e => {
        e.preventDefault()
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        await sendEmailVerification();
        toast('Verify email sent. Verify now to get access');
    }

    if (token) {
        navigate('/')
    }

    if (loading || sending) {
        return <Loading />
    }

    let errorElement;
    if (errorCreateUser || errorEmailVerify) {
        errorElement = <p className='text-danger'>{errorCreateUser ? errorCreateUser.message : errorEmailVerify.message}</p>
    }

    return (
        <div className='d-flex'>
            <div className='w-25 mx-auto mt-5'>
                <Form className='my-3' onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter Full Name" required onBlur={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required onBlur={e => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required onBlur={handlePassword} />
                    </Form.Group><Form.Group className="mb-3" controlId="formBasicReTypePassword">
                        <Form.Control type="password" placeholder="Re-Type Password" required onBlur={handleRetypePassword} />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                {errorElement}
                <SocialLogin />
                <p className='my-3'> Already have an account? <Link to='/login' style={{ textDecoration: 'none' }}  >LogIn Now</Link> </p>
                <ToastContainer />
            </div>
            <div className='border-start'>
                <img src='https://i.ibb.co/KNBWGk0/Sign-up-bro.png' alt="" style={{ maxHeight: '80vh' }} />
            </div>
        </div>
    );
};

export default Register;
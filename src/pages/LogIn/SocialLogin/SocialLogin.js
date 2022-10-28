import React from 'react';
import googleIcon from '../../../images/icon-images/google.png'
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/';
    let errorElement;
    if (error) {
        errorElement = error.message;
    }

    if (user) {
        toast('Google SingIn successful')
        navigate(from, { replace: true })
    }

    return (
        <div className='my-4'>
            {error && <p style={{ color: 'red' }}>{errorElement}</p>}
            <Button variant='white' className='border rounded' onClick={() => signInWithGoogle()}>
                <img src={googleIcon} alt="" />
                <span className='mx-4'> Google SignIn</span>
            </Button>
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;
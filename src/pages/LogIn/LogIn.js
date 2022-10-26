import React from 'react';
import googleIcon from '../../images/icon-images/google.png'
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const LogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>{error?.message}</p>
    }

    return (
        <div>
            <h1>LogIn</h1>
            {user && <p>{user?.email}</p>}
            <Button variant='white' className='border rounded' onClick={() => signInWithGoogle()}>
                <img src={googleIcon} alt="" />
                <span className='mx-4'>Google SignIn</span>
            </Button>
        </div>
    );
};

export default LogIn;
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Profile = () => {
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>{error?.message}</p>
    }

    return (
        <div>
            <img src={user?.photoURL} alt="" width={150} height={150} style={{ borderRadius: '50%' }} />
            <h3>Name: {user.displayName}</h3>
            <p>Email: {user?.email}</p>
            <Link to='/updateprofile'> <Button variant='primary'>Edit Profile</Button></Link>
        </div>
    );
};

export default Profile;
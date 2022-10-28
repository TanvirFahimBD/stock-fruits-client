import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>{error?.message}</p>
    }

    return (
        <div className='my-5'>
            <img src={user?.photoURL} alt="" width={200} height={200} style={{ borderRadius: '50%' }} />
            <h3 className='my-3'>{user?.displayName}</h3>
            <p>Email: {user?.email}</p>
        </div>
    );
};

export default Profile;
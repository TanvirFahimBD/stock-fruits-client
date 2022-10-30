import React from 'react';
import auth from '../../../firebase.init';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UpdateProfile = () => {
    const [displayName, setDisplayName] = useState('')
    const [photoURL, setPhotoURL] = useState('')
    const [user, loading, errorUser] = useAuthState(auth);
    const [updateProfile, updating, errorUpdateProfile] = useUpdateProfile(auth);

    const handleProfileUpdate = async e => {
        e.preventDefault()
        await updateProfile({ displayName, photoURL });
        toast('Updated profile');
    }

    if (loading || updating) {
        return <Loading />;
    }

    if (errorUser || errorUpdateProfile) {
        return <p>{errorUser ? errorUser?.message : errorUpdateProfile?.message}</p>
    }

    return (
        <div className='d-flex'>
            <div className='border-end'>
                <img src='https://i.ibb.co/NZst4nw/Resume-folder-bro.png' alt="" style={{ maxHeight: '80vh' }} />
            </div>
            <div className=' w-25 mx-auto my-5'>
                <Form className='my-3' onSubmit={handleProfileUpdate}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required
                            value={user?.email} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDisplayName">
                        <Form.Control type="text" placeholder="Enter Full Name" required onBlur={(e) => setDisplayName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                        <Form.Control type="text" placeholder="Enter Photo URL" required onBlur={(e) => setPhotoURL(e.target.value)} />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Update Profile
                    </Button>
                </Form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default UpdateProfile;
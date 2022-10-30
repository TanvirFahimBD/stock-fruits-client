import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import FruitInfo from '../UpdateFruits/FruitInfo/FruitInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import axiosPrivate from '../../api/axiosPrivate';

const MyFruits = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const [myFruits, setMyFruits] = useState([])

    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/fruit/${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setMyFruits(data);
            }
            catch (error) {
                // if (error.request.status === 403 || error.request.status === 401) {
                //     signOut(auth)
                //     navigate('/login')
                // }
            }
        }
        getOrders()
    }, [user])

    if (!user) {
        return <Loading />
    }

    return (
        <Container>
            <Row>
                {myFruits.map(fruit => <FruitInfo key={fruit._id} fruit={fruit} />)}
            </Row >
        </Container>
    );
};

export default MyFruits;
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import FruitInfo from '../UpdateFruits/FruitInfo/FruitInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const MyFruits = () => {
    const [user] = useAuthState(auth);
    const [myFruits, setMyFruits] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/fruit/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyFruits(data);
            })
    }, [user])

    return (
        <Container>
            <Row>
                {myFruits.map(fruit => <FruitInfo key={fruit._id} fruit={fruit} />)}
            </Row >
        </Container>
    );
};

export default MyFruits;
import React from 'react';
import useFruits from '../../hooks/useFruits';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Loading from '../Shared/Loading/Loading';
import FruitInfo from './FruitInfo/FruitInfo';

const UpdateFruits = () => {
    const [fruits] = useFruits()

    if (!fruits.length) {
        return <Loading />
    }

    return (
        <Container>
            <Row>
                {fruits.map(fruit => <FruitInfo key={fruit._id} fruit={fruit} />)}
            </Row>
        </Container>
    );
};

export default UpdateFruits;
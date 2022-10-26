import React from 'react';
import useFruits from '../../hooks/useFruits';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FruitsDetails from '../Home/Fruits/FruitsDetails/FruitsDetails';
import Loading from '../Shared/Loading/Loading';

const ManageFruits = () => {
    const [fruits] = useFruits()

    if (!fruits.length) {
        return <Loading />
    }

    return (
        <Container>
            <Row>
                {fruits.map(fruit => <FruitsDetails key={fruit._id} fruit={fruit} />)}
            </Row>
        </Container>
    );
};

export default ManageFruits;
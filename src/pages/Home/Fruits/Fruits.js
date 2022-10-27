import React from 'react';
import useFruits from '../../../hooks/useFruits';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FruitsDetails from './FruitsDetails/FruitsDetails';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const Fruits = () => {
    const [fruits] = useFruits()
    if (!fruits.length) {
        return <Loading />
    }

    return (
        <div>
            <div>
                <h1 className='my-5'>Our Fruits</h1>
            </div>
            <Container>
                <Row>
                    {fruits.slice(0, 6).map(fruit => <FruitsDetails key={fruit._id} fruit={fruit} />)}
                </Row>
            </Container>

            <Link to='/updatefruits'><Button variant='primary' className='my-3'>See All fruits</Button></Link>

        </div >
    );
};

export default Fruits;
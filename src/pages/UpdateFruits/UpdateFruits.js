import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import FruitInfo from './FruitInfo/FruitInfo';
import Loading from '../Shared/Loading/Loading';

const UpdateFruits = () => {
    const [pageCount, setPageCount] = useState(0)
    const [size, setSize] = useState(10)
    const [page, setPage] = useState(0)
    const [fruits, setFruits] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/fruit?size=${size}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setFruits(data)
            })
    }, [page, size])

    useEffect(() => {
        fetch('http://localhost:5000/fruitCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / size);
                setPageCount(pages);
            })
    }, [size])

    if (!fruits.length) {
        return <Loading />
    }

    return (
        <Container>
            <Row>
                {fruits.map(fruit => <FruitInfo key={fruit._id} fruit={fruit} />)}
            </Row>
            {[...Array(pageCount).keys()].map(num =>
                <Button className='m-3 px-3' variant={`${page === num ? 'primary' : 'secondary'}`}
                    onClick={() => setPage(num)} key={Math.random() * 10000}>
                    {num + 1}
                </Button>
            )}
            <select onChange={(e) => setSize(e.target.value)}>
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </Container>
    );
};

export default UpdateFruits;
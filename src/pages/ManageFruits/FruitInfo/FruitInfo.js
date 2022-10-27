import React from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const FruitInfo = ({ fruit }) => {
    const { _id, description, image, itemName, price, quantity, supplierName } = fruit;
    return (
        <Col sm={12} md={6} lg={4} className='my-4'>
            <Card>
                <Card.Img variant="top" src={image} height={200} />
                <Card.Body>
                    <Card.Title>{itemName}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>{quantity}</Card.Text>
                    <Card.Footer>
                        <Card.Text>{`${description.slice(0, 50)}...`}</Card.Text>
                        <small className="text-muted">{supplierName}</small>
                    </Card.Footer>
                    <Link to={`/fruits/${_id}`}>
                        <Button className='my-2 w-100' >Update</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FruitInfo;

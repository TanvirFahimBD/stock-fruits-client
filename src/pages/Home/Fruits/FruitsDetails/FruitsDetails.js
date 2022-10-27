import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const FruitsDetails = ({ fruit }) => {
    const { image, itemName, price, quantity, supplierName } = fruit;

    return (
        <Col sm={6} md={4} lg={3} className='my-4'>
            <Card>
                <Card.Img variant="top" src={image} height={200} />
                <Card.Body>
                    <Card.Title>{itemName}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>{quantity}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{supplierName}</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default FruitsDetails;
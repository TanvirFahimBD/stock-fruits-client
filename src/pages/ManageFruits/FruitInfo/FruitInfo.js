import React from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const FruitInfo = ({ fruit }) => {
    const { _id, description, image, itemName, price, quantity, supplierName } = fruit;
    return (
        <Col>
            <img src={image} alt="" width={200} height={200} className='border rounded my-2' />
            <h4>{itemName}</h4>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier:{supplierName}</p>
            <p>{`${description.slice(0, 50)}...`}</p>
            <Link to={`/fruits/${_id}`}>
                <Button>Update</Button>
            </Link>
        </Col>
    );
};

export default FruitInfo;
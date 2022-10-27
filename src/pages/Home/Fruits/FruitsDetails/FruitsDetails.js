import React from 'react';
import Col from 'react-bootstrap/Col';

const FruitsDetails = ({ fruit }) => {
    const { image, itemName, price, quantity, supplierName } = fruit;

    return (
        <Col>
            <img src={image} alt="" width={200} height={200} className='border rounded my-2' />
            <h4>{itemName}</h4>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <h6>Supplier:{supplierName}</h6>
        </Col>
    );
};

export default FruitsDetails;
import React from 'react';
import { Button } from 'react-bootstrap';

const ManageFruit = ({ fruit, handleDelete }) => {
    const { _id, itemName, supplierName, quantity, price } = fruit;

    const handleDeleteFruit = id => {
        handleDelete(id)
    }

    return (
        <tr>
            <td>{_id}</td>
            <td>{itemName}</td>
            <td>{supplierName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
                <Button onClick={() => handleDeleteFruit(_id)}>Delete
                </Button>
            </td>
        </tr>
    );
};

export default ManageFruit;
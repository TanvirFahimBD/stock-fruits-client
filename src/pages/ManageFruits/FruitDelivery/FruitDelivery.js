import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useFruits from '../../../hooks/useFruits';
import Loading from '../../Shared/Loading/Loading';

const FruitDelivery = () => {
    const { fruitId } = useParams()
    const [fruits] = useFruits();
    const [fruit, setFruit] = useState({})
    const [amount, setAmount] = useState(0)
    const [addQuantity, setAddQuantity] = useState(0)

    useEffect(() => {
        const selectedFruit = fruits.find(fruit => fruit._id === fruitId)
        setFruit(selectedFruit)
        setAmount(selectedFruit?.quantity)
    }, [fruits])

    const handleStock = e => {
        e.preventDefault()
        if (typeof addQuantity === 'number' && addQuantity > 0) {
            setAmount(amount + addQuantity)
        }
        else {
            alert('Please Enter Number on stock amount input')
        }
    }

    if (!fruit?._id) {
        return <Loading />
    }

    return (
        <div className='d-flex'>
            <div className='w-50 mx-auto p-3 border-end' >
                <img src={fruit?.image} alt="" width={200} height={200} className='border rounded my-2' />
                <h4>{fruit?.itemName}</h4>
                <p>Price: {fruit?.price}</p>
                <p>Quantity: {amount}</p>
                <p>Supplier: {fruit?.supplierName}</p>
                <p>{fruit?.description}</p>
                <Button variant='primary' onClick={() => setAmount(amount - 1)} >Delivered</Button>
            </div>
            <div className='w-50 mx-auto my-3'>
                <h1>Add Stock</h1>
                <form onSubmit={handleStock}>
                    <input type="text" className='p-2 my-3 w-50' value={fruit?.itemName} readOnly disabled />
                    <br />
                    <input type="text" className='p-2 my-3 w-50' value={fruit?.price} readOnly disabled />
                    <br />
                    <input type="text" className='p-2 my-3 w-50' placeholder='Add quantity' onBlur={(e) => setAddQuantity(parseFloat(e.target.value))} />
                    <br />
                    <input className='btn btn-primary w-50' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default FruitDelivery;
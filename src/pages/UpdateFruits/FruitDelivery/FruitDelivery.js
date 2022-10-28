import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useFruits from '../../../hooks/useFruits';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FruitDelivery = () => {
    const { fruitId } = useParams()
    const [fruits] = useFruits();
    const [fruit, setFruit] = useState({})
    const [amount, setAmount] = useState(0)
    const [addQuantity, setAddQuantity] = useState(0)

    //! show selected fruit 
    useEffect(() => {
        const selectedFruit = fruits.find(fruit => fruit._id === fruitId)
        setFruit(selectedFruit)
        setAmount(selectedFruit?.quantity)
    }, [fruits])

    //! put api request
    const getUpdateFruit = (currentAmount) => {
        const currentFruit = {
            itemName: fruit.itemName,
            image: fruit.image,
            description: fruit.description,
            price: fruit.price,
            quantity: currentAmount,
            supplierName: fruit.supplierName
        }

        fetch(`http://localhost:5000/fruit/${fruitId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentFruit)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast('Stock Amount updated Successfully')
                }
            })
    }

    //! handle stock
    let currentAmount;
    const handleStock = e => {
        e.preventDefault()
        //! amount of fruit state update
        if (typeof addQuantity === 'number' && addQuantity > 0) {
            currentAmount = amount + addQuantity;
            setAmount(currentAmount)
        }
        else {
            alert('Please Enter Number on stock amount input')
        }

        getUpdateFruit(currentAmount)
    }

    //! handle delivery
    const handleDeliver = () => {
        currentAmount = amount - 1;
        setAmount(currentAmount)
        getUpdateFruit(currentAmount)
        toast('One Item delivered Successfully')
    }

    if (!fruit?._id) {
        return <Loading />
    }

    return (
        <div className='d-flex'>
            {/* delivery part  */}
            <div className='w-50 mx-auto p-3 border-end' >
                <img src={fruit?.image} alt="" width={200} height={200} className='border rounded my-2' />
                <h4>{fruit?.itemName}</h4>
                <p>Price: {fruit?.price}</p>
                <p>Quantity: {amount}</p>
                <p>Supplier: {fruit?.supplierName}</p>
                <p>{fruit?.description}</p>
                <Button variant='primary' onClick={handleDeliver} >Delivered</Button>
            </div>
            {/* stock update part  */}
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
                <ToastContainer />
            </div>
        </div>
    );
};

export default FruitDelivery;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFruits from '../../../hooks/useFruits';
import Loading from '../../Shared/Loading/Loading';

const FruitDelivery = () => {
    const { fruitId } = useParams()
    const [fruits] = useFruits();
    const [fruit, setFruit] = useState({})

    const getFruit = async () => {
        const selectedFruit = await fruits.find(fruit => fruit._id === fruitId)

        console.log("🚀 ~ file: FruitDelivery.js ~ line 12 ~ useEffect ~ selectedFruit", selectedFruit)

        setFruit(selectedFruit)
    }

    getFruit()
    if (!fruit?._id) {
        return <Loading />
    }

    return (
        <div className='w-50 mx-auto'>
            <img src={fruit?.image} alt="" width={200} height={200} className='border rounded my-2' />
            <h4>{fruit?.itemName}</h4>
            <p>Price: {fruit?.price}</p>
            <p>Quantity: {fruit?.quantity}</p>
            <p>Supplier:{fruit?.supplierName}</p>
            <p>{fruit?.description}</p>
        </div>
    );
};

export default FruitDelivery;
import Table from 'react-bootstrap/Table';
import React from 'react';
import useFruits from '../../hooks/useFruits';
import ManageFruit from './ManageFruit/ManageFruit';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageFruits = () => {
    const [fruits, setFruits] = useFruits()

    const handleDelete = id => {
        fetch(`http://localhost:5000/fruit/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainingFruits = fruits.filter(fruit => fruit._id !== id)
                    setFruits(remainingFruits)
                    toast('Stock deleted Successfully')
                }
            })
    }

    if (!fruits.length) {
        return <Loading />
    }

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fruit Name</th>
                        <th>Supplier Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {fruits.map(fruit => <ManageFruit key={fruit._id} fruit={fruit} handleDelete={handleDelete} />)}
                </tbody>
            </Table>
            <ToastContainer />
        </div >
    );
};

export default ManageFruits;
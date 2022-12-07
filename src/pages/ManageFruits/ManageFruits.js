import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import useFruits from '../../hooks/useFruits';
import ManageFruit from './ManageFruit/ManageFruit';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';

const ManageFruits = () => {
    const [fruits, setFruits] = useState([])
    const [size, setSize] = useState(10)
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)

    //! get total fruit amount
    useEffect(() => {
        fetch('http://localhost:5000/fruitCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                setPageCount(Math.ceil(count / size))
            })
    }, [size])

    //! get page & item numbers size based items
    useEffect(() => {
        fetch(`http://localhost:5000/fruit?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setFruits(data)
            })
    }, [page, size])


    const handleDelete = id => {
        const conf = window.confirm('Are you sure you want to delete?')
        if (conf) {
            fetch(`http://localhost:5000/fruit/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remainingFruits = fruits.filter(fruit => fruit._id !== id)
                        setFruits(remainingFruits)
                        toast.success('Stock deleted Successfully')
                    }
                })
        }

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
            {/* pagination buttons  */}
            {
                [...Array(pageCount).keys()].map(num =>
                    <Button className='m-3' variant={`${page === num ? 'primary' : 'secondary'}`} onClick={() => setPage(num)} key={Math.random() * 10000} >{num + 1}</Button>)
            }
            {/* pagination page size selection */}
            <select onClick={(e) => setSize(e.target.value)}>
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </div >
    );
};

export default ManageFruits;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddFruits = () => {
    const [user] = useAuthState(auth);
    const [itemName, setItemName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [supplierName, setSupplierName] = useState('')

    const handleAddNewItem = e => {
        e.preventDefault()
        const email = user?.email;
        const newItem = { email, itemName, image, description, price, quantity, supplierName }

        fetch('http://localhost:5000/fruit', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset()
                if (data.insertedId) {
                    toast('New Item added Successfully')
                }
            })
    }

    return (
        <div className='d-flex'>
            <div className='border-end'>
                <img src='https://i.ibb.co/kq7DYGF/Uploading-bro.png' alt="" style={{ maxHeight: '80vh' }} />
            </div>
            <div className='w-25 mx-auto'>
                <h1 className='my-5'>Add New Fruit</h1>
                <Form className='my-5' onSubmit={handleAddNewItem} >
                    <Form.Group className="mb-3" controlId="formBasicItemName">
                        <Form.Control type="text" placeholder="Fruit Name" required onBlur={(e) => setItemName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Control type="text" placeholder="Image" required onBlur={(e) => setImage(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Control type="text" placeholder="Price" required onBlur={(e) => setPrice(e.target.value)} />
                    </Form.Group>

                    <input type="text" name="" id="" className='w-100 py-1 px-2 my-2 rounded' style={{ backgroundColor: "lightSteelBlue" }} placeholder='Quantity' required onBlur={(e) => setQuantity(parseFloat(e.target.value))} />

                    <Form.Group className="mb-3" controlId="formBasicSupplierName">
                        <Form.Control type="text" placeholder="Supplier Name" required onBlur={(e) => setSupplierName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Control as="textarea" type="text" placeholder="Description" required onBlur={(e) => setDescription(e.target.value)} />
                    </Form.Group>

                    <Button className='w-100' variant="primary" type="submit">
                        Add New Item
                    </Button>
                </Form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddFruits;
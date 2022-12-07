import * as React from 'react';
import store from '../../../images/images.jpg'
import './Footer.css'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()

    return (
        <div className='mt-5'>
            <div className='d-flex justify-content-between' container spacing={2}>
                <div item xs={6} md={3}>
                    <ul className='list-style'>
                        <li>
                            <h3>Services</h3>
                        </li>
                        <li>Hair Cut</li>
                        <li>Hair Color</li>
                        <li>Hair Dry</li>
                    </ul>
                </div>
                <div item xs={6} md={3}>
                    <ul className='list-style'>
                        <li>
                            <h3>Socials</h3>
                        </li>
                        <li>Facebook</li>
                        <li>Youtube</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div item xs={6} md={3}>
                    <ul className='list-style'>
                        <li>
                            <h3>Contact</h3>
                        </li>
                        <li>Email</li>
                        <li>Blog</li>
                        <li>Address</li>
                    </ul>
                </div>
                <div item xs={6} md={3}>
                    <img src={store} alt="" />
                </div>
            </div>
            <p className='text-center'>Copyright {year}. All rights reserved.</p>
        </div>
    );
};

export default Footer;
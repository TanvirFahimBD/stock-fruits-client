import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <img src='https://i.ibb.co/cDVzRrJ/404-error-lost-in-space-rafiki.png' alt="" style={{ maxHeight: '80vh' }} />
            <p>Go to <Link to='/' style={{ textDecoration: 'none' }} >Home</Link></p>
        </div>
    );
};

export default NotFoundPage;
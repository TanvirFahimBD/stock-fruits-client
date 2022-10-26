import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h1>Not Page Found</h1>
            <p>Go to <Link to='/'>Home</Link></p>
        </div>
    );
};

export default NotFoundPage;
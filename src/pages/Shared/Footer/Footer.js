import React from 'react';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className='text-center'>
            <p>Copyright {year}. All rights reserved.</p>
        </div>
    );
};

export default Footer;
import React from 'react';

const Clients = () => {
    return (
        <div>
            <h1 className='my-5 text-primary'> What Clients Says</h1>
            <div className='d-flex justify-content-evenly' container spacing={2}>
                <div item xs={6} md={3}>
                    <img src="https://i.ibb.co/VSb3hqG/jonas-kakaroto-KIPqvv-TOC1s-unsplash.jpg" alt="" width={200} height={200} style={{ borderRadius: '50%' }} />
                    <h3 className='my-3'>John Erik</h3>
                    <p>⭐⭐⭐⭐</p>
                    <p>Most valuable service i got ever</p>
                </div>
                <div item xs={6} md={3}>
                    <img src="https://i.ibb.co/JBBwH4d/brooke-cagle-w-KOKid-NT14w-unsplash.jpg" alt="" width={200} height={200} style={{ borderRadius: '50%' }} />
                    <h3 className='my-3'>Stark Ijak</h3>
                    <p>⭐⭐⭐</p>
                    <p>Average service. No so fast</p>
                </div>
                <div item xs={6} md={3}>
                    <img src="https://i.ibb.co/HCpPS7H/foto-sushi-6anudmp-ILw4-unsplash.jpg" alt="" width={200} height={200} style={{ borderRadius: '50%' }} />
                    <h3 className='my-3'>Thomas Fredik</h3>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Best service i got from them each time.</p>
                </div>
            </div>
        </div>
    );
};

export default Clients;
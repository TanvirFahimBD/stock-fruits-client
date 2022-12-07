import React from 'react';

const Services = () => {
    return (
        <div>
            <h1 className='my-5 text-primary'> Service We Provide</h1>
            <div className='d-flex justify-content-evenly' container spacing={2}>
                <div>
                    <img src="https://i.ibb.co/Cs9H7KR/bastien-plu-ka-CXo-Lm5d-Fo-unsplash.jpg" alt="" width={400} height={400} className='border rounded' />
                </div>
                <div className='my-5'>
                    <h3 className='m-3'>You <span className='text-primary'>smile</span> is our happiness</h3>
                    <h3 className='m-3'>is <span className='text-primary'>our </span>happiness </h3>
                    <h3 className='m-3'>Delivery <span className='text-primary'>On time</span></h3>
                    <h3> <span className='text-primary'>24/7 </span> Delivery</h3>
                    <h3>Collection <span className='text-primary'>10+</span>  point </h3>
                </div>
            </div>
        </div>
    );
};

export default Services;
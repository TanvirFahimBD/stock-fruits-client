import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../../images/banner-images/banner1.jpg'
import banner2 from '../../../images/banner-images/banner2.jpg'
import banner3 from '../../../images/banner-images/banner3.jpg'

const NavBar = () => {

    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );

};

export default NavBar;
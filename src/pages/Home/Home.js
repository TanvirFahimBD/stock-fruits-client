import React from 'react';
import Clients from './Clients/Clients';
import Fruits from './Fruits/Fruits';
import NavBar from './NavBar/NavBar';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Fruits />
            <Clients />
            <Services />
        </div>
    );
};

export default Home;
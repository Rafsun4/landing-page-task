import React from 'react';
import Cards from './Cards';
import Digital from './Digital';
import Growth from './Growth';
import Header from './Header';
import Mobiles from './Mobiles';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Digital></Digital>
            <Mobiles></Mobiles>
            <Growth></Growth>
            <Cards></Cards>
        </div>
    );
};

export default Home;